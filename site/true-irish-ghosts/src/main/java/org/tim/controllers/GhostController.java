package org.tim.controllers;

import java.io.BufferedReader;
import java.io.FileReader;
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
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.tim.model.GhostLoc;

@RestController
public class GhostController {

	//TODO read from resources
	//private static String fileName = "D:/workspaces/tigs/code/dataprocessor/src/main/resources/ghosts.json";
	private static String fileName = "src/main/resources/ghostsnew.json";
	//private static String dataFodler = "D:/workspaces/tigs/site/true-irish-ghosts/src/main/resources/data/";
	private static String dataFodler = "src/main/resources/data/";

	
	@CrossOrigin
	@RequestMapping(value = "/ghosts", method=RequestMethod.GET)
    public List<GhostLoc> getGhosts() {
        //return new GhostLoc("Ardtrea", new Position(54.628017,-6.681921));
		return readGhostFile();
    }
	
	@CrossOrigin
	@RequestMapping(value = "/ghostlocation/{ghostfileId}", method=RequestMethod.GET)
    public JSONObject getGhostLocation(@PathVariable String ghostfileId) {
		JSONObject fileData = new JSONObject();
		String fileName = dataFodler + ghostfileId + ".json";
         JSONParser parser = new JSONParser();
		try {
				Object obj = parser.parse(new FileReader(fileName));
				fileData = (JSONObject) obj;
	            System.out.println(fileData);
		} catch (IOException x) {
					    System.err.println(x);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			 System.err.println(e);
		}
		return fileData;
	}
	
	
	private List<GhostLoc> readGhostFile(){
		List<GhostLoc> listOfGhosts = new ArrayList<GhostLoc>();
		
		Path file = Paths.get(fileName);
		try (InputStream in = Files.newInputStream(file);
		    BufferedReader reader =
		      new BufferedReader(new InputStreamReader(in))) {
		    JsonFactory factory = new JsonFactory();
		    JsonParser jp = factory.createJsonParser(reader);
		    //TokenBuffer buffer = new TokenBuffer(null);
		    ObjectMapper mapper = new ObjectMapper();
		    //JsonNode root = mapper.readTree(buffer.asParser());
		    jp.nextToken();
		    // and then each time, advance to opening START_OBJECT
		    while (jp.nextToken() == JsonToken.START_OBJECT) {
		      GhostLoc ghostloc = mapper.readValue(jp, GhostLoc.class);
		      listOfGhosts.add(ghostloc);
		      //System.out.println(ghostloc.getId() + ghostloc.getTitle());
		    }
		    jp.close();
		} catch (IOException x) {
		    System.err.println(x);
		}
		
		return listOfGhosts;
	}

}
