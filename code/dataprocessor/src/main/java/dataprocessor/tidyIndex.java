package dataprocessor;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;


public class tidyIndex {
	
	private static String indexfileName = "D:/workspaces/tigs/code/dataprocessor/src/main/resources/index.txt";
	private static String outputfileName = "D:/workspaces/tigs/code/dataprocessor/src/main/resources/index_clean.csv";

	public static void main(String[] args) {
		Charset charset = Charset.forName("US-ASCII");
		Path file = Paths.get(indexfileName);
		Path outputfile = Paths.get(outputfileName);
		//List<LocationRef> ghostStories = new ArrayList<LocationRef>();
		try (InputStream in = Files.newInputStream(file);
		    BufferedReader reader =  new BufferedReader(new InputStreamReader(in));
		    BufferedWriter writer = Files.newBufferedWriter(outputfile, charset)) {
		    String line = null;
		    while ((line = reader.readLine()) != null) {
		    	if(line.length() > 1){
		    		System.out.println(line);
		    		line = Indexparser.cleanLine(line);
		    		writer.write(line);
		    		writer.newLine();
		    	}
		    }
		} catch (IOException x) {
		    System.err.println(x);
		}
	}

}
