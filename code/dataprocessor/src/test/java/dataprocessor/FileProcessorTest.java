package dataprocessor;

import static org.junit.Assert.*;

import org.junit.Test;

public class FileProcessorTest extends FileProcessor {

	@Test
	public void testFind() {
		String pageRef = "33";
		int pageNo = 33;
		FileProcessor.findPage(pageRef, pageNo);
		
	}
	
	@Test
	public void testConverterToPageNum() {
		String referenceToConvert = "35";
		String convertedReference = FileProcessor.convertPageNoToActualPageNo(referenceToConvert);
		assertEquals(convertedReference, "[p. 35]");
	}

}
