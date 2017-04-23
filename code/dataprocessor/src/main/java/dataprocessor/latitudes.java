package dataprocessor;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class latitudes {

	private static String fileName = "D:/workspaces/tigs/code/dataprocessor/src/main/resources/markers.csv";

	public static void main(String[] args) {
			Path file = Paths.get(fileName);
			try (InputStream in = Files.newInputStream(file);
			    BufferedReader reader =
			      new BufferedReader(new InputStreamReader(in))) {
			    String line = null;
			    int index = 1;
			    while ((line = reader.readLine()) != null) {
			    	String convertedLine = MarkerParser.parseLine(line, index);	
			    	System.out.println(convertedLine + ",");
			    	index++;
			    }
			} catch (IOException x) {
			    System.err.println(x);
			}
	}

}
