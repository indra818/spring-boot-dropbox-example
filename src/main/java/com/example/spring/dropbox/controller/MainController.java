package com.example.spring.dropbox.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * @author kyeongjinkim
 * @version 1.0.0
 * @since 2017-05-23
 */
@Controller
public class MainController {

	@GetMapping("/")
	public String index() throws Exception {
		return "index";
	}

}
