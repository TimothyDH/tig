package dataprocessor.model;

import java.util.ArrayList;
import java.util.List;

public class LocationRef {
	private String name;
	private String description;
	private List<String> references = new ArrayList<String>();
	
	public LocationRef() {
	}


	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<String> getReferences() {
		return references;
	}


	public void addReference(String reference) {
		this.references.add(reference);
	}
	

}
