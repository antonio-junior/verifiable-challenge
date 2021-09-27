# Regression Test Cases

Pre-condition: valid admin credentials

## Features in the scope

- Provider
- License Verification

## Strategies

- End to End
- API

## Objectives:

- Ensure the Application Under Test conforms to functional requirements

## Test Cases

### TC1 - Add Provider - Happy Path

Description: Create a new provider filling all fields

Steps:

1. Login in the application
2. Click on Add Provider
3. Fill all fields
4. Click on Submit

Expected result: a new provider should be created

### TC2 - Add Provider - Validate required fields

Description: Try to create a new provider keeping the required fields empty

Steps:

1. Login in the application
2. Click on Add Provider
3. Keep all fields in blank and click on Submit

Expected result: The message 'This field is required' is displayed for 'Fist Name' and 'Last Name' fields

### TC3 - Edit Provider

Pre-condition: A valid provider created

Description: Edit an existing provider

Steps:

1. Login in the application
2. Click on an existing Provider
3. Add Training and Education information
4. Save

Expected result: The Provider should have its data updated.

### TC4 - Delete Provider

Pre-condition: A valid provider created

Description: Delete an existing provider

### TC5 - Add License and Verify

Pre-condition: A valid provider created

Description: Add a license to an existing provider

### TC6 - Edit License

Pre-condition: A valid licensed created within a provider

Description: Edit a license from an existing provider
