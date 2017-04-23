package org.tim.model;

public class GhostLoc {
	private int id;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}

	private  String title;
	private  Position position;
	public String getTitle() {
		return title;
	}
	public Position getPosition() {
		return position;
	}
	public GhostLoc(int id, String title, Position position) {
		super();
		this.id = id;
		this.title = title;
		this.position = position;
	}
	
	public GhostLoc() {
	}

}
