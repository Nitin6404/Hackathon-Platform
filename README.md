# Hackathon Platform

## Introduction

This is a Hackathon Platform powered by **SoarX** designed to streamline the process of organizing and participating in hackathons. It provides a platform for participants to register, submit their projects, and collaborate with team members. 

## Features

- **User Authentication**: Allows users to sign up, log in, and manage their accounts securely.
- **Team Management**: Enables users to create teams, invite team members, and collaborate on projects.
- **Project Submission**: Provides a user-friendly interface for submitting hackathon projects and supporting materials.
- **Hackathon Rounds**: Organizes hackathons into multiple rounds, each with specific requirements and deadlines.
- **Notification System**: Sends email notifications to participants about important updates, deadlines, and announcements.
- **Dashboard**: Offers a personalized dashboard for each user, displaying relevant information about their teams and submissions.

## How It Works

1. **User Registration**: Participants sign up for the hackathon platform by providing their email and creating a password. They can also sign up using their Google or GitHub accounts for added convenience.

2. **Team Creation**: Once registered, participants can create teams or join existing ones. Team leaders can invite members by providing their email addresses.

3. **Hackathon Participation**: Participants navigate through different rounds of the hackathon, submitting their projects according to the requirements of each round.

4. **Judging Process**: Judges review and evaluate the submitted projects, providing feedback and selecting finalists for the next round.

5. **Final Round**: The top teams compete in the final round of the hackathon, where they showcase their projects in person or virtually.

### Team Registration and Selection
#### Implementation Details:
1. **Team Creation and Invitation**:
   - Team leaders can create a team by providing a team name and description.
   - Implement an invitation system where team leaders can invite members by email.
   - Store team and invitation data in Supabase.

2. **Joining Teams**:
   - Users can view and request to join existing teams.
   - Team leaders can approve or reject join requests through the platform.

3. **Selection Process**:
   - Admins can view and manage team registrations.
   - Implement a selection process for teams based on criteria defined by the admin.
   
## Contributors

- [Nitin6404](https://github.com/Nitin6404) - Project Lead & Developer
