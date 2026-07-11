# TechDesk Pro Planning

## Main Users

1. Regular User
- Create tickets
- View their own tickets
- Comment on tickets

2. Admin/Support User
- View all tickets
- Update ticket status
- Assign tickets
- Manage devices
- View dashboard stats

## Ticket Statuses

- Open
- In Progress
- Resolved
- Closed

## Ticket Priorities

- Low
- Medium
- High
- Urgent

## Database Tables

## users

- id
- name
- email
- password_hash
- role
- created_at

## tickets

- id
- title
- description
- category
- priority
- status
- created_by
- assigned_to
- created_at
- updated_at

## comments

- id
- ticket_id
- user_id
- comment_text
- is_internal_note
- created_at

## devices

- id
- device_name
- serial_number
- device_type
- assigned_to
- status
- purchase_date
- notes
