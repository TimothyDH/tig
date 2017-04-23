package dataprocessor;

import static org.junit.Assert.*;

import org.junit.Test;

public class MarkerParserTest {

	@Test
	public void testGetJsonfromLine() {
			String lineToParse = "Clare,Co.,52.904532,-8.9811351,75,77,179,18,256";
			String json = MarkerParser.parseLine(lineToParse);
			System.out.println(json);
	}

}
