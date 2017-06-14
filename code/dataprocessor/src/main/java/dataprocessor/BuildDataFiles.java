package dataprocessor;

import java.io.BufferedReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

import org.codehaus.jackson.JsonFactory;
import org.codehaus.jackson.JsonParser;
import org.codehaus.jackson.JsonToken;
import org.codehaus.jackson.map.ObjectMapper;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import dataprocessor.model.LocationRef;

public class BuildDataFiles {
	private static String fjsonileName = "D:/workspaces/tigs/code/dataprocessor/src/main/resources/ghosts.json";
	private static String textfileName = "D:/workspaces/tigs/code/dataprocessor/src/main/resources/tigs.txt";
	//private static String indexfileName = "D:/workspaces/tigs/code/dataprocessor/src/main/resources/index_clean.csv";
	private static String indexfileName = "D:/workspaces/tigs/code/dataprocessor/src/main/resources/index.txt";

	public static void main(String[] args){

		Path indexfile = Paths.get(indexfileName);
		List<LocationRef> ghostStories = new ArrayList<LocationRef>();
		try (InputStream in = Files.newInputStream(indexfile);
		    BufferedReader reader =  new BufferedReader(new InputStreamReader(in))) {
		    String line = null;
		    while ((line = reader.readLine()) != null) {
		    	if(line.length() > 1){
		    		System.out.println(line);
		    		LocationRef loc = Indexparser.parseLine(line);
		    		ghostStories.add(loc);
		    	}
		    }
		} catch (IOException x) {
		    System.err.println(x);
		}
		
		System.out.println("+++++++++++++INDEX PROCESSED++++++++++++++");
		System.out.println("Number of ghost stories:" + ghostStories.size());
		

		Path file = Paths.get(fjsonileName);
		try (InputStream in = Files.newInputStream(file);
		    BufferedReader reader =
		      new BufferedReader(new InputStreamReader(in))) {
		    String line = null;
		    JsonFactory factory = new JsonFactory();
		    JsonParser jp = factory.createJsonParser(reader);
		    //TokenBuffer buffer = new TokenBuffer(null);
		    ObjectMapper mapper = new ObjectMapper();
		    //JsonNode root = mapper.readTree(buffer.asParser());
		    jp.nextToken();
		    //String placeToFind = "";
		    // and then each time, advance to opening START_OBJECT
		    while (jp.nextToken() == JsonToken.START_OBJECT) {
		      GhostLoc ghostloc = mapper.readValue(jp, GhostLoc.class);
		      System.out.println(ghostloc.getTitle());
		      // process
		      // title is "Co. " something convert it back to the way it was in the index
		      String outputFileTitle = ghostloc.getTitle(); 
		      //outputFileTitle += Double.toString(ghostloc.getPosition().getLat());
		      //outputFileTitle += Double.toString(ghostloc.getPosition().getLng());
		      outputFileTitle += ".json";
		      System.out.println(outputFileTitle);
		      final String placeToFind = ghostloc.getTitle();
		      /*if(placeToFind.startsWith("Co. ")){
		    	  placeToFind = placeToFind.substring(4);
		    	  //placeToFind += ",Co.";
		      }*/
		      System.out.println("PLACE TO FIND:" + placeToFind);
		      //find it
		     //doing it old school
		      int  i = 0;
		      boolean foundit = false;
		      LocationRef oneWereLookingFor = null;
		      while((i < ghostStories.size())&&(!foundit)){
		    	  LocationRef story = ghostStories.get(i);
		    	  if(story.getName().equals(placeToFind)){
		    		  System.out.println("FOUND IT:" + story.getName());
		    		  oneWereLookingFor = story;
		    		  foundit = true;
		    	  }
		    	  i++;
		      }
		      if(foundit){
		    	  //look for the references
		    	  JSONObject storydetails = new JSONObject();
		    	  storydetails.put("placename", oneWereLookingFor.getName());
		    	  storydetails.put("placeType", oneWereLookingFor.getDescription());

		  		  JSONArray reflist = new JSONArray();
		  		  List<String> references = oneWereLookingFor.getReferences();
		  		  for(int j =0; j < references.size(); j++){
		  			//String reference = "GHOST STORY:";
		  			String pageRef = references.get(j);
		  			int pageNo = Integer.parseInt(pageRef);
		  			String text = FileProcessor.findPage(pageRef, pageNo); 
		  			JSONObject pagetext = new JSONObject();
		  			pagetext.put("text", text);
		  			reflist.add(pagetext);
		  		}
		  		storydetails.put("references", reflist);
		  		try {

					FileWriter outputfile = new FileWriter(outputFileTitle);
					outputfile.write(storydetails.toJSONString());
					outputfile.flush();
					outputfile.close();

				} catch (IOException e) {
					e.printStackTrace();
				}

		      }
		      // after binding, stream points to closing END_OBJECT
		    }
		    jp.close();
		} catch (IOException x) {
		    System.err.println(x);
		}
		
	}
}
