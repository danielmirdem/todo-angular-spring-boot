package com.danielmir.deloitte.nospringboot.configuration; 

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@Configuration
@EnableWebSecurity
public class SpringSecurityConfigurationBasicAuth extends WebSecurityConfigurerAdapter {

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
			.csrf().disable()
			.authorizeRequests()
				//ANGULAR URLS
				.antMatchers("/deloitte", "/login","/welcome/**",
					"/todos/**", "/logout", "/*.js"
				).permitAll()
				//APIS
				.antMatchers("/api/auth/**").permitAll()			
				.antMatchers(HttpMethod.OPTIONS, "/api/**").permitAll().anyRequest().authenticated()
				.and()
				.formLogin().loginPage("/login").permitAll().and()			
				.httpBasic();	
	}
}