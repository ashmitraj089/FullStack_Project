package net.javaguides.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "education")
public class Education {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "secondary")
	private String secondary;

	@Column(name = "ss")
	private String ss;
	
	@Column(name = "btech")
	private String btech;

	@Column(name = "mtech")
	private String mtech;
	
	@Column(name = "username")
	private String username;
	
	public Education() {
		
	}
	
	public Education(long id, String secondary, String ss, String btech, String mtech, String username) {
		super();
		this.id = id;
		this.secondary = secondary;
		this.ss = ss;
		this.btech = btech;
		this.mtech = mtech;
		this.username=username;
	}


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getSecondary() {
		return secondary;
	}


	public void setSecondary(String secondary) {
		this.secondary = secondary;
	}


	public String getSs() {
		return ss;
	}


	public void setSs(String ss) {
		this.ss = ss;
	}


	public String getBtech() {
		return btech;
	}


	public void setBtech(String btech) {
		this.btech = btech;
	}


	public String getMtech() {
		return mtech;
	}


	public void setMtech(String mtech) {
		this.mtech = mtech;
	}
	
	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	
	
}
