<?php
	header( "Content-Type: application/json" );
	ini_set( "display_errors", "0" );

	$inputj = file_get_contents( "php://input", true );
	$in = json_decode( $inputj, TRUE );

	if( !isset( $in["name"] ) ) {
		http_response_code( 400 );
		$output = array( success => false, error => "name" );
		echo( json_encode( $output ) );
		exit();
	}

	if( !isset( $in["email"] ) ) {
		http_response_code( 400 );
		$output = array( success => false, error => "email" );
		echo( json_encode( $output ) );
		exit();
	}

	if( !isset( $in["message"] ) ) {
		http_response_code( 400 );
		$output = array( success => false, error => "message" );
		echo( json_encode( $output ) );
		exit();
	}

	$name = strip_tags( $in["name"] );
	$email = strip_tags( $in["email"] );
	$message = strip_tags( $in["message"] );

	$headers = "From: " . $email . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

	$body = file_get_contents( "template.html" );

	$body = str_replace( '$name', $name, $body );
	$body = str_replace( '$email', $email, $body );
	$body = str_replace( '$message', $message, $body );

	$res = mail( "csus@uwo.ca", "CSUS - Contact Form", $body, $headers );
	
	$output = array( success => $res );

	if( !$res ) {
		http_response_code( 500 );
		$output["error"] = "mail";
	}
	
	echo( json_encode( $output ) );