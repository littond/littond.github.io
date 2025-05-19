---
title: Building My Portfolio Website with AI Agents
date: 2025-05-18
slug: building-with-ai-agents
tags: [AI, Development, Web Design, Cursor]
excerpt: My insights and experiences after using AI agents in Cursor to build my personal portfolio website, from initial impressions to practical applications and limitations.
---

# Building My Portfolio Website with AI Agents

## The Opportunity

As a student, I recently heard that I can get free access to Cursor Pro with its AI agent capabilities. I had been wanting to finish my portfolio website for some time, and this seemed like a good opportunity to explore these AI tools.

Having heard a lot about how AI agents can accelerate development, I was curious to see how it would perform on a project where I had a specific vision but needed help with implementation details. Would it genuinely speed up development? Would the code be maintainable? Could I trust the AI's suggestions?

## My Experience

### The Good: Structured Refactoring

One area where the AI agent truly excelled was structured refactoring. Whenever I needed to make systematic changes across multiple components, the agent proved incredibly valuable. For example, when I decided to consolidate all the chip-style elements scattered across various components into a single, reusable `Chip` component, the agent handled this beautifully.

The process went something like this:
1. I explained the goal: consolidate various chip implementations into one component
2. The agent identified all occurrences across the codebase
3. It created a new reusable component with flexible props
4. It systematically updated all instances to use the new component
5. It cleaned up redundant CSS styles

This type of refactoring, which would have been tedious to do manually, was completed in minutes rather than hours.

Similarly, when I wanted to create a unified `SectionTitle` component to maintain consistent styling across the site, the agent efficiently implemented this change across all relevant files.

### The Challenge: Style Bloat

One downside I noticed, which applies to AI code generation in general not just Cursor's agents, was a tendency toward style bloat. The agent often generated more CSS than necessary, sometimes creating redundant styles or overly specific selectors.

I found myself repeatedly slimming down the CSS after each major addition to the site. This was important for maintaining a codebase that would be easy to update and extend in the future. The agent was efficient at generating working code, but not necessarily at creating the most maintainable styling approach.

For example, when implementing various layout components, the AI would often create new classes with similar properties instead of leveraging existing styles or creating more general-purpose utility classes. This required some manual intervention to keep the CSS organized and efficient.

### The Shift: From Developer to Reviewer

Perhaps the most interesting observation was how my role shifted during development. Rather than feeling like the primary developer, I often felt more like a code reviewer or editor. The workflow generally followed this pattern:

1. I'd describe a feature or change I wanted to implement
2. The agent would generate a comprehensive solution
3. I'd review the changes, deciding whether to accept, modify, or reject them
4. After several iterations, I'd need to step back and study the code to ensure I fully understood how everything worked together

This dynamic was different even from more prompt based AI use I was used too. On one hand, development progressed much faster than if I had written everything myself. On the other hand, I sometimes felt disconnected from the code, needing to take time to study what had been created to maintain a clear view of the project.

## Reflections

Using AI agents to build my portfolio site was an eye-opening experience. The technology genuinely accelerated development in many areas, particularly for routine tasks and structured changes. However, it also introduced new challenges in terms of code ownership and maintenance.

I found that the most effective approach was to use the AI as a powerful assistant rather than attempting to delegate entire features. By maintaining clear direction over architecture decisions and regularly reviewing generated code, I could benefit from the speed while still ensuring the result aligned with my vision for a clean, maintainable codebase.

In the end, my portfolio site was completed much faster than it would have been otherwise, and I learned valuable lessons about both web development and the emerging role of AI in the development process.