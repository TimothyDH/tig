package dataprocessor;

import org.json.simple.JSONObject;


public class MarkerParser {
	public static String parseLine(String lineToParse, int index) {
		//remove leading/trailing whitespace
		lineToParse = lineToParse.trim();
		//break it up around the commas
		String[] stringElements = lineToParse.split(",");
		JSONObject obj = new JSONObject();
		//check we've got something
		if(stringElements.length > 1){
			String title = "";
			if(!stringElements[1].isEmpty()){
				title += stringElements[1];
				title += " ";
			}
			title += stringElements[0];
			obj.put("id", index);
	        obj.put("title", title);
	        JSONObject latlong = new JSONObject();
	        latlong.put("lat", new Float(stringElements[2]));
	        latlong.put("lng", new Float(stringElements[3]));
	        obj.put("position", latlong);
		}
		return obj.toJSONString();		
	}
	
}
