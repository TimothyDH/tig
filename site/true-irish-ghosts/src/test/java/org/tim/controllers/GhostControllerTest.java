package org.tim.controllers;

import static org.junit.Assert.*;

import java.io.IOException;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;


//import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.*;

import org.springframework.web.context.WebApplicationContext;
import org.tim.TrueIrishGhostsApplication;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = TrueIrishGhostsApplication.class)
@WebAppConfiguration
public class GhostControllerTest {
	 @Autowired
	    private WebApplicationContext webApplicationContext;
	 private MockMvc mockMvc;


	@Before
	public void setUp() throws Exception {
		this.mockMvc = webAppContextSetup(webApplicationContext).build();
	}

	@Test
	public void testGetGhostLocation() {
		try{
			this.mockMvc.perform(get("/ghostlocation/2")).andExpect(status().isOk());
		}
		catch  (Exception x) {
		    System.err.println(x);
		    fail("error");
		}
	}

}
