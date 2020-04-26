-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 24, 2020 at 05:33 PM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `achme-broker`
--

-- --------------------------------------------------------

--
-- Table structure for table `client_policies`
--

CREATE TABLE `client_policies` (
  `id` int(11) NOT NULL,
  `clientName` text NOT NULL,
  `customerName` text NOT NULL,
  `customerAddress` text NOT NULL,
  `premium` decimal(10,2) NOT NULL,
  `policyType` text NOT NULL,
  `insurerName` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `client_policies`
--

INSERT INTO `client_policies` (`id`, `clientName`, `customerName`, `customerAddress`, `premium`, `policyType`, `insurerName`) VALUES
(1, 'Achme Broker Ltd', 'ABC Joinery', '12 Ascott Street, Dundee', '123.87', 'Public Liability', 'Aviva'),
(3, 'Achme Broker Ltd', 'XYZ Plumbing', '24 Fleet Street, Glasgow', '2321.45', 'Public Liability', 'Allianz'),
(5, 'Achme Broker Ltd', 'Fast Taxis', '324b Bank Street, Aberdeen', '59897.00', 'Motor Fleet', 'Aviva'),
(7, 'Achme Broker Ltd', 'Fast Taxis', '324b Bank Street, Aberdeen\r\n', '6845.00', 'Public Liability', 'QBE');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `client_policies`
--
ALTER TABLE `client_policies`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `client_policies`
--
ALTER TABLE `client_policies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
