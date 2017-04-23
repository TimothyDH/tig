package dataprocessor;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.codehaus.jackson.JsonEncoding;
import org.codehaus.jackson.JsonFactory;
import org.codehaus.jackson.JsonNode;
import org.codehaus.jackson.JsonParser;
import org.codehaus.jackson.JsonToken;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.util.TokenBuffer;

public class JsonFileProcessor {
	
	private static String fileName = "D:/workspaces/tigs/code/dataprocessor/src/main/resources/ghosts.json";
	
	public static void main(String[] args){
		
		Path file = Paths.get(fileName);
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
		    // and then each time, advance to opening START_OBJECT
		    while (jp.nextToken() == JsonToken.START_OBJECT) {
		      GhostLoc ghostloc = mapper.readValue(jp, GhostLoc.class);
		      System.out.println(ghostloc.getTitle());
		      // process
		      // after binding, stream points to closing END_OBJECT
		    }
		    jp.close();
		} catch (IOException x) {
		    System.err.println(x);
		}
		
	}


}
