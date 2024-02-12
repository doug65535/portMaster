package com.doug.port;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
@MapperScan("com.doug.port.mapper")
public class PortApplication {
	public static void main(String[] args) {
		SpringApplication.run(PortApplication.class, args);
	}

}


