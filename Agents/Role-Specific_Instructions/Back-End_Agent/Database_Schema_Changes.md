# Database Schema Changes

## Overview

This document outlines the database schema changes required for the PayNomad Capital Ltd. project. As the Back-End Agent, you are responsible for designing, implementing, and maintaining the database schema to support the application's functionality while ensuring data integrity, performance, and security.

## Current Schema

### Users Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_login TIMESTAMP WITH TIME ZONE
);
```

### Contact Submissions Table
```sql
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status VARCHAR(50) DEFAULT 'pending'
);
```

## Required Schema Changes

### 1. Add Services Table

**Purpose:** Store information about financial services offered by PayNomad Capital Ltd.

```sql
CREATE TABLE services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  icon_name VARCHAR(100) NOT NULL,
  display_order INTEGER NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 2. Add Blog Posts Table

**Purpose:** Store blog posts for the Insights section.

```sql
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  summary TEXT NOT NULL,
  content TEXT NOT NULL,
  author_id UUID REFERENCES users(id),
  published_at TIMESTAMP WITH TIME ZONE,
  is_published BOOLEAN DEFAULT FALSE,
  featured_image_url VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX blog_posts_slug_idx ON blog_posts(slug);
CREATE INDEX blog_posts_published_at_idx ON blog_posts(published_at) WHERE is_published = TRUE;
```

### 3. Add Categories Table

**Purpose:** Categorize blog posts.

```sql
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE blog_post_categories (
  blog_post_id UUID REFERENCES blog_posts(id) ON DELETE CASCADE,
  category_id UUID REFERENCES categories(id) ON DELETE CASCADE,
  PRIMARY KEY (blog_post_id, category_id)
);
```

### 4. Enhance User Profiles

**Purpose:** Add additional user profile information for team members.

```sql
ALTER TABLE users ADD COLUMN position VARCHAR(255);
ALTER TABLE users ADD COLUMN bio TEXT;
ALTER TABLE users ADD COLUMN profile_image_url VARCHAR(255);
ALTER TABLE users ADD COLUMN is_team_member BOOLEAN DEFAULT FALSE;
ALTER TABLE users ADD COLUMN social_links JSONB;
```

### 5. Add Subscription Table

**Purpose:** Store newsletter subscriptions.

```sql
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_active BOOLEAN DEFAULT TRUE,
  unsubscribed_at TIMESTAMP WITH TIME ZONE,
  source VARCHAR(100)
);
```

## Implementation Tasks

### Task 1: Create Migration Scripts
- Develop SQL migration scripts for all schema changes
- Include rollback scripts for each migration
- Test migrations in development environment

### Task 2: Update Data Access Layer
- Modify existing data access code to work with new schema
- Implement new repository methods for added tables
- Update validation logic for new data structures

### Task 3: Seed Initial Data
- Create seed scripts for services table
- Develop sample blog posts for testing
- Set up test categories

### Task 4: Documentation
- Update database schema documentation
- Document new API endpoints related to schema changes
- Create entity relationship diagrams

## Testing Requirements

- Unit tests for all new repository methods
- Integration tests for data access layer
- Performance testing for complex queries
- Data integrity tests

## Collaboration Requirements

- Coordinate with the Security Agent for data security review
- Work with the UI/UX Agent to ensure schema supports UI requirements
- Collaborate with the AI Specialist for any AI-related data structures

## Deliverables

- Complete migration scripts
- Updated data access layer
- Seed data scripts
- Comprehensive documentation
- Test suite
