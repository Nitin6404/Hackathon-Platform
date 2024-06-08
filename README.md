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

## Current Milestone: Enhancements and Refinements

1. **Initialize the Project**
   - Set up a Git repository for version control.
   - Initialize the React
   - Install necessary dependencies

2. **Create the Frontend (React)**
   - Set up the basic structure for your React application.
   - Organize folders for components, pages, and services.

3. **Set Up Supabase**
   - Create a Supabase project.
   - Set up authentication and database.

## Next Milestone: Integration and Testing

### *User Registration and Authentication*

**Importance/Context**: This milestone focuses on implementing secure user registration and login functionality using Supabase Auth, ensuring that participants can create accounts, log in securely, and access the platform's features.

**Specific Tasks**:

1. **Create Registration and Login Forms in React**:
   - **Explanation**: Registration and login forms serve as the entry point for users to access the platform. They provide a means for users to input their credentials securely.
   - **Implementation Details**: Utilize React to design and develop the registration and login forms. Specific libraries or components such as Material-UI may be used for building the UI elements. These forms should include fields for email and password, and potentially additional information required for registration.

2. **Use Supabase Auth for Handling User Authentication**:
   - **Explanation**: Supabase Auth provides a robust and secure authentication solution for user management. Integrating Supabase Auth ensures that user authentication is handled securely and efficiently.
   - **Implementation Details**: Utilize Supabase's authentication methods (`supabase.auth.signUp()` and `supabase.auth.signIn()`) within the React application to handle user registration and login processes. These methods interact with Supabase's authentication backend to authenticate users securely.

3. **Implement Email Confirmation Using Supabase's Built-in Email Verification**:
   - **Explanation**: Email verification adds an extra layer of security to the registration process by confirming the validity of a user's email address. This helps prevent unauthorized access and ensures that only legitimate users can register on the platform.
   - **Implementation Details**: Configure Supabase to enable email verification for user registration. This involves setting up email verification settings in the Supabase dashboard and ensuring that Supabase is configured to send verification emails to users upon registration. Additionally, implement logic within the React application to handle email verification events and update the user's verification status accordingly.

### *Email Verification*

**Importance/Context**: Email verification is crucial for ensuring the security and legitimacy of user accounts on the platform. Customizing email templates adds a personalized touch to the verification process and enhances the user experience.

**Specific Tasks**:

1. **Use Supabase's Email Verification Feature**:
   - **Explanation**: Supabase offers built-in email verification functionality, making it easy to verify the email addresses of registered users.
   - **Implementation Details**: Enable email verification for user registration within the Supabase dashboard. This involves configuring email verification settings to suit the project's requirements, such as specifying email templates and setting up email sending options.

2. **Customize Email Templates for Registration Confirmation and Verification via Supabase Dashboard**:
   - **Explanation**: Customizing email templates allows for branding consistency and provides users with a personalized registration and verification experience.
   - **Implementation Details**: Access the Supabase dashboard and navigate to the Email Templates section. Customize email templates for registration confirmation and verification by modifying elements such as the email subject, body content, and branding elements. This ensures that the emails align with the platform's branding and messaging guidelines, providing users with a cohesive experience.

## Contributors

- [Nitin6404](https://github.com/Nitin6404) - Project Lead & Developer
