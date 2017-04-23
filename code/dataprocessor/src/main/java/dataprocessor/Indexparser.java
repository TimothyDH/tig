package dataprocessor;

import dataprocessor.model.LocationRef;

public class Indexparser {

	public static LocationRef parseLine(String lineToParse) {
		LocationRef locRef = new LocationRef();
		//remove leading/trailing whitespace
		lineToParse = lineToParse.trim();
		//break it up around the commas
		String[] stringElements = lineToParse.split(",");
		//check we've got something
		if(stringElements.length > 1){
			locRef.setName(stringElements[0].trim());
			int whereReferencesStart = 1;
			if(!stringElements[1].contains("<")){
				//it has a description
				locRef.setDescription(stringElements[1].trim());
				whereReferencesStart = 2;
			}			
			while(whereReferencesStart < stringElements.length){
				String ref = stringElements[whereReferencesStart].trim();
				ref =  convertReferenceToPageNo(ref);
				locRef.addReference(ref);
				whereReferencesStart ++;
			}
			
		}
		return locRef;		
	}
	
	public static String convertReferenceToPageNo(String ref){
		//index refs are in the format "<page X>" while the pages are actually numbered "[p. 230]"
		String converted = ref.trim(); 
		converted = converted.replace("page", "");
		converted = converted.replace("<", "");
		converted = converted.replace(">", "");
		converted = converted.trim();
		/*converted = converted.replace("page", "p.");
		converted = converted.replace("<", "[");
		converted = converted.replace(">", "]");*/
		return converted;
		
	}
	
	public static String cleanLine(String lineToParse) {
		String response = "";
		//remove leading/trailing whitespace
		lineToParse = lineToParse.trim();
		//break it up around the commas
		String[] stringElements = lineToParse.split(",");
		//check we've got something
		if(stringElements.length > 1){
			response += stringElements[0].trim() + ",";
			int whereReferencesStart = 1;
			if(!stringElements[1].contains("<")){
				//it has a description
				response += stringElements[1].trim() + ",";
				whereReferencesStart = 2;
			}			
			while(whereReferencesStart < stringElements.length){
				String ref = stringElements[whereReferencesStart].trim();
				ref =  convertReferenceToPageNo(ref);
				response += ref + ",";
				whereReferencesStart ++;
			}
			
		}
		return response;		
	}
	

}
