-- phpMyAdmin SQL Dump
-- version 3.2.0.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 24, 2010 at 02:37 AM
-- Server version: 5.1.36
-- PHP Version: 5.3.0

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Database: `anondb`
--

-- --------------------------------------------------------

--
-- Table structure for table `job`
--

CREATE TABLE IF NOT EXISTS `job` (
  `jobid` int(4) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `company` varchar(250) DEFAULT NULL,
  `company_alias` varchar(250) DEFAULT NULL,
  `min_exp` decimal(4,0) DEFAULT NULL,
  `max_exp` decimal(4,0) DEFAULT NULL,
  `location` varchar(50) DEFAULT NULL,
  `skillset` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`jobid`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=15 ;

--
-- Dumping data for table `job`
--

INSERT INTO `job` (`jobid`, `title`, `description`, `company`, `company_alias`, `min_exp`, `max_exp`, `location`, `skillset`) VALUES
(1, 'SOA Architect', 'SOA Architect/SOA Architect/SOA Architect/SOA Architect/v/SOA Architect/SOA Architect/SOA Architect/SOA Architect', 'CMM Level 5', 'CMM Level 5', '10', '15', 'Chennai', 'SOA'),
(2, 'Enterprise Architect', 'Enterprise Architect', 'CMM Level 5', 'CMM Level 5', '10', '15', 'Chennai', 'EA, SOA'),
(14, 'PHP programmer', 'This job is related for creating the website by programming', 'Cognizent', 'cogni', '2', '22', 'Mumbai', 'PHP,&nbsp;FLASH,&nbsp;MYSQL,&nbsp;C++,&nbsp;VB');
