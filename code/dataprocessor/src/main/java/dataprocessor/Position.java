package dataprocessor;

public class Position {
	 private double lat;
	 private double lng;
	
	 public double getLat() {
		return lat;
	}
	public double getLng() {
		return lng;
	}
	public Position(double lat, double lng) {
		this.lat = lat;
		this.lng = lng;
	}
 	  
	public Position() {
	}
}
