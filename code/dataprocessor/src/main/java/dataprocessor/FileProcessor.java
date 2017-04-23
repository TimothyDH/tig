package dataprocessor;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.stream.Stream;


public class FileProcessor {

	private static String pageRefStart = "[p. ";
	private static String pageRefEnd = "]";

	private static String fileName = "D:/workspaces/tigs/code/dataprocessor/src/main/resources/tigs.txt";
	
	public static String findPage(String pageReference, int pageNumber){
		String foundText = "";
		Path file = Paths.get(fileName);
		try (InputStream in = Files.newInputStream(file);
		    BufferedReader reader =
		      new BufferedReader(new InputStreamReader(in))) {
		    String line = null;
		    boolean foundStart = false;
		    boolean foundEnd = false;
		    String pageToFind = convertPageNoToActualPageNo(String.valueOf(pageNumber));
		    String nextPage = convertPageNoToActualPageNo(String.valueOf(pageNumber + 2));
		    while ((line = reader.readLine()) != null) {
		    	if(foundStart){
		    		System.out.println(line);
		    		foundText += line;
		    		if(line.contains(nextPage)){
		    			foundStart = false;
		    		}
		    	}
		    	if(line.contains(pageToFind)){
		    		foundStart = true;
		    	}
		    }
		} catch (IOException x) {
		    System.err.println(x);
		}
		return foundText;
	}
	
	public static String convertPageNoToActualPageNo(String pageNo){
		String converted = pageNo.trim();
		converted = pageRefStart + converted + pageRefEnd;
		return converted;
	}

}
