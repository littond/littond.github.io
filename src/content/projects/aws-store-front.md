---
title: AWS Store Front
date: 2025-05-07
slug: aws-store-front
tags: [AWS, Microservices, Serverless, Backend]
excerpt: Attempt to make a simple, scalable, and modifyable commerce system using AWS.
---

# AWS Serverless Store Font

## Project Overview

This project is a  simplified **Retail E-Commerce Platform** built using a serverless microservices architecture on **AWS**. The system provides an online storefront for customers while offering back-office tools for business managers to monitor inventory and generate sales analytics.

---

## Core Functionalities

The system addresses three primary business needs:

- **Online Storefront:** A complete web interface (front-end and back-end) for product browsing and ordering.
- **Automated Inventory Tracking:** Real-time monitoring of stock levels with automated low-stock alerts.
- **Business Intelligence:** Automated generation of daily sales and inventory reports exported to S3.
    

---

## Service & Data Architecture

The system is decomposed into four primary microservices, each utilizing **AWS Lambda** for high scalability and **DynamoDB** for persistent storage.

### 1. Catalog Service (`GET /catalog`)

Retrieves available products by cross-referencing the `product-catalog` with the `inventory` table. This ensures that only items currently in stock are displayed to the customer.

### 2. Order Service (`POST /order`)

Manages the checkout process by verifying stock availability, recording the transaction in the `orders` table, and updating inventory levels.

- **Event-Driven Alerts:** After an order is placed, a message is sent to an **AWS SQS** queue.
    
- **Async Processing:** This triggers an `inventory-checker` Lambda that evaluates stock levels and sends email notifications via **AWS SNS** if a product falls below a certain threshold.
    

### 3. Inventory Management (`PUT /inventory`)

An administrative service that allows the business to add inventory items and update the `product-catalog` tables.

### 4. Reporting Service (`POST /report`)

Aggregates order and inventory data, generating a report that is deposited into an **AWS S3** bucket. Users can kick off the generation and check the status via an execution ID.

---

## Data Schema

The system utilizes a NoSQL approach with the following DynamoDB structures:

|**Table**|**Partition Key**|**Attributes**|
|---|---|---|
|**inventory**|`product` (S)|category (S), cost (N), description (S)|
|**product-catalog**|`product` (S)|quantity (N)|
|**orders**|`OrderId` (S)|product (Sort Key), orderDate (S), quantity (N)|

---

## Key Technical Learnings

- **Infrastructure Management:** Manually deploying cloud resources highlighted the critical need for **Infrastructure as Code (IaC)** and **CI/CD pipelines** in professional environments.
    
- **Scalability:** Utilizing serverless components (Lambda, SQS) ensures the system can handle fluctuating traffic loads cost-effectively.
    
- **Consistency vs. Availability:** During the design phase, I analyzed the **CAP Theorem**, initially planning for a CP (Consistency/Partition Tolerance) model for critical data like payments and orders to ensure financial accuracy.
    

---

## AWS Infrastructure

### Adding Inventory
![Adding Inventory](/assets/projects/aws-store-front/add-inventory.png)

### Retrieving Inventory
![Retrieving Inventory](/assets/projects/aws-store-front/current-catalog.png)

### Generating Reports
![Generating Reports](/assets/projects/aws-store-front/report-client.png)

### Placing Orders
![Placing Orders](/assets/projects/aws-store-front/place-order.png)

---

## Future Roadmap

If granted additional development time, the following enhancements would be prioritized:

- **Infrastructure Automation:** Implement **Terraform** to manage AWS resources and automate deployments.
    
- **Database Evolution:** Transition to an SQL-based database for more complex relational querying of orders.
    
- **Enhanced Media:** Store and pull product imagery directly from **S3** to create a richer UI catalog.
    
- **Testing:** Develop a comprehensive automated test suite to handle edge cases and erroneous service behavior.
    

---

## Resources

- **GitHub Repository:** [micro-service-final-project](https://github.com/littond/micro-service-final-project)
    
- **Tech Stack:** Node.js, Express, AWS (Lambda, API Gateway, DynamoDB, SQS, SNS, S3).