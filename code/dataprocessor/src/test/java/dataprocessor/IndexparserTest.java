package dataprocessor;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.Before;
import org.junit.Test;

import dataprocessor.model.LocationRef;

public class IndexparserTest {
	

	@Test
	public void testParseOneRef() {
		String lineToParse = "Rathmines, <page 19>";
		LocationRef loc = Indexparser.parseLine(lineToParse);
		assertEquals(loc.getName(), "Rathmines");
		assertNull(loc.getDescription());
		List<String> references = loc.getReferences();
		assertEquals(1, references.size());
		assertEquals(references.get(0), "19");
	}
	
	@Test
	public void testParseWithDesc() {
		String lineToParse = "DONEGAL, CO., <page 51>";
		LocationRef loc = Indexparser.parseLine(lineToParse);
		assertEquals(loc.getName(), "DONEGAL");
		assertEquals(loc.getDescription(), "CO.");
		List<String> references = loc.getReferences();
		assertEquals(1, references.size());
		assertEquals(references.get(0), "51");
	}

	@Test
	public void testParseWithDescMultipleRefs() {
		String lineToParse = "Clare, Co., <page 75>, <page 77>, <page 179>, <page 18>, <page 256>";
		LocationRef loc = Indexparser.parseLine(lineToParse);
		assertEquals(loc.getName(), "Clare");
		assertEquals(loc.getDescription(), "Co.");
		List<String> references = loc.getReferences();
		assertEquals(5, references.size());
		assertEquals(references.get(2), "179");
	}

	@Test
	public void testParseWithNoDescMultipleRefs() {
		String lineToParse = "NORTH OF IRELAND, <page 35>, <page 37>";
		LocationRef loc = Indexparser.parseLine(lineToParse);
		assertEquals(loc.getName(), "NORTH OF IRELAND");
		assertNull(loc.getDescription());
		List<String> references = loc.getReferences();
		assertEquals(2, references.size());
		assertEquals(references.get(1), "37");
	}
	
	@Test
	public void testConverter() {
		String referenceToConvert = "<page 35>";
		String convertedReference = Indexparser.convertReferenceToPageNo(referenceToConvert);
		assertEquals(convertedReference, "35");
	}

	
}
