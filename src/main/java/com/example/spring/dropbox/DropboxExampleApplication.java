package com.example.spring.dropbox;

import com.dropbox.core.DbxException;
import com.dropbox.core.DbxRequestConfig;
import com.dropbox.core.http.StandardHttpRequestor;
import com.dropbox.core.v2.DbxClientV2;
import com.example.spring.dropbox.config.WebConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Import;

@SpringBootApplication
@ComponentScan(basePackages = {
		"com.example.spring.dropbox.controller",
		"com.example.spring.dropbox.service"
})
@Import({WebConfig.class})
public class DropboxExampleApplication {

	public static void main(String[] args) {
		SpringApplication.run(DropboxExampleApplication.class, args);
	}

	@Bean("dropboxClient")
	public DbxClientV2 dropboxClient() throws DbxException {
		String ACCESS_TOKEN = "Your dropbox oauth2 access token";
		DbxRequestConfig config = new DbxRequestConfig("dropbox/java-tutorial");
		DbxClientV2 client = new DbxClientV2(config, ACCESS_TOKEN);
		return client;
	}
}
