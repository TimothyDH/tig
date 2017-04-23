package dataprocessor;

public class GhostLoc {
	private String title;
	private Position position;
	public String getTitle() {
		return title;
	}
	public Position getPosition() {
		return position;
	}
	public GhostLoc(String title, Position position) {
		super();
		this.title = title;
		this.position = position;
	}
	
	public GhostLoc() {
	}

}
