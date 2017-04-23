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

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import dataprocessor.model.LocationRef;

public class ProcessIndex {

	private static String textfileName = "D:/workspaces/tigs/code/dataprocessor/src/main/resources/tigs.txt";
	private static String indexfileName = "D:/workspaces/tigs/code/dataprocessor/src/main/resources/index.txt";
	private static String outputfileName = "D:/workspaces/tigs/code/dataprocessor/src/main/resources/indexdata1.txt";
	
	public static void main(String[] args) {
		Path file = Paths.get(indexfileName);
		List<LocationRef> ghostStories = new ArrayList<LocationRef>();
		try (InputStream in = Files.newInputStream(file);
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
		
		LocationRef story = ghostStories.get(7);
		JSONObject obj = new JSONObject();
		obj.put("placename", story.getName());
		obj.put("placeType", story.getDescription());

		JSONArray reflist = new JSONArray();
		List<String> references = story.getReferences();
		for(int i =0; i < references.size(); i++){
			String reference = "GHOST STORY:";
			String pageRef = references.get(i);
			int pageNo = Integer.parseInt(pageRef);
			String text = FileProcessor.findPage(pageRef, pageNo); 
			reflist.add(text);
		}
		obj.put("references", reflist);

		try {

			FileWriter outputfile = new FileWriter(outputfileName);
			outputfile.write(obj.toJSONString());
			outputfile.flush();
			outputfile.close();

		} catch (IOException e) {
			e.printStackTrace();
		}

		

	}

}
