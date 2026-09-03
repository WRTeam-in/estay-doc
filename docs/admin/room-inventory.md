---
id: room-inventory
title: Room Inventory
---

# Room Inventory

Manage physical room numbers, floor assignments, and room availability for each property.

**Navigate to:** Sidebar → Room Management → **Room Inventory**

:::warning Multi-mode: this entire section doesn't exist for admins
The whole **Room Management** group described on this page — Room Inventory, Room Types, All Rooms — is **Single Mode only**. In [Multi Mode](./overview.md#single-mode-vs-multi-mode), room types and room inventory are managed entirely by the **partner** who owns the property, from their own Partner Panel. Admins don't have a room management page in multi mode at all; you'd review a partner's rooms as part of [Property Verification](./property-verification.md) or a property's detail view instead.
:::

---

## Overview

The Room Inventory page is where you define and manage the actual physical rooms in a property — which floor they are on, what room type they belong to, and whether they are active or inactive. This is separate from the Room Types configuration, which defines the category of room (e.g., Deluxe Suite). Room Inventory is about the individual doors — Room 101, Room 102, and so on.

:::info
You must select a property from the top bar before the Room Inventory page shows any data.
:::

---

## Floor Setup

Floors are automatically generated when a property is created or edited. During property setup, the admin specifies the **Total Floors** for the property. The system creates named floor records in order:

- Ground Floor
- First Floor
- Second Floor
- Third Floor
- and so on...

### Floor Count Rules

| Action | Allowed |
|---|---|
| Increase floor count (edit property) | Always allowed — new floors are added |
| Decrease floor count | Only allowed if the floors being removed have **no rooms** |

:::warning
You cannot reduce the floor count if rooms exist on the floors that would be removed. Remove or reassign those rooms first from the Room Inventory page, then reduce the count.
:::

Floors that have no rooms assigned are automatically hidden from the Room Inventory page. They will reappear once rooms are added to them.

---

## Adding Rooms

Click **+ Add Rooms** at the top right. An inline form appears at the top of the page.

![Room Inventory Add Form](/images/panel/room-inventory-add.png)

Fill in the following fields and click **Generate Rooms**:

| Field | Description |
|---|---|
| **Floor** | Select which floor these rooms belong to. |
| **Room Type** | Select the room type (e.g., Deluxe Room, Standard Room). |
| **Number of Rooms** | How many rooms to generate in sequence. |
| **Starting Room Number** | The first number in the sequence (e.g., 201). |

The system creates sequential room numbers automatically.

**Example:**
- Floor: First Floor
- Room Type: Deluxe Room
- Number of Rooms: 5
- Starting Room Number: 101

Result: Room 101, Room 102, Room 103, Room 104, Room 105 — all assigned to First Floor as Deluxe Rooms.

:::info
Room numbers are unique per property. If a generated number already exists in the property, that number is skipped and a warning is shown. All other rooms in the sequence are still created.
:::

:::info
If you previously deleted a room number and regenerate it, the system restores the original room record rather than creating a new one. This preserves the room's historical booking references.
:::

---

## Room Cards

Rooms are displayed as cards, grouped by floor in collapsible sections.

![Room Inventory Grid](/images/panel/room-inventory-grid.png)

Each card shows:

| Information | Description |
|---|---|
| **Room Number** | The physical room identifier (e.g., Room 201). |
| **Room Type** | The type assigned to this room. |
| **Status Badge** | Active (green) or Inactive (red). |
| **Edit / Delete** | Appear when hovering over the card. Hidden when bulk selection mode is active. |

### Editing a Room

Click the **pencil icon** on hover to open the Edit Room modal. You can update:

| Field | Description |
|---|---|
| **Room Number** | Rename the room. Must be unique within the property. |
| **Room Type** | Change the room type. Blocked if the room has active or checked-in bookings. |
| **Floor** | Move the room to a different floor. |
| **Status** | Set to Active or Inactive. Blocked if the room has active or checked-in bookings assigned to it. |

### Deleting a Room

Click the **trash icon** on hover. A confirmation dialog appears.

:::warning
A room cannot be deleted if it has active bookings (Confirmed or Checked-In status). Resolve or cancel those bookings first.
:::

Deleted rooms are soft-deleted. Their room numbers can be regenerated later — the system will restore the original record rather than create a duplicate.

---

## Bulk Activate / Deactivate

Select multiple rooms using the checkboxes on each card. A banner appears at the top showing how many rooms are selected, with bulk action buttons:

- **Active All** — Sets all selected inactive rooms to Active. Only shown if the selection includes at least one inactive room.
- **Inactive All** — Sets all selected active rooms to Inactive. Only shown if the selection includes at least one active room.

:::info
The buttons shown adapt to what is selected. If all selected rooms are already active, only **Inactive All** appears. If all are inactive, only **Active All** appears. If the selection is mixed, both appear.
:::

:::warning
Rooms with active or checked-in bookings cannot be deactivated. In a bulk deactivation, those rooms are automatically skipped and a warning notification lists which room numbers were skipped and why. All other selected rooms are deactivated normally.
:::

:::info
Inactive rooms are excluded from room assignment when checking in bookings. They do not count toward available inventory.
:::

---

## Room Assignment Flow

Room numbers are not assigned at the time a booking is created. They are assigned separately, either before check-in or at the moment of check-in.

### Assigning Rooms Before Check-In

From **Sidebar → All Bookings**, each booking row has a **Select Rooms** button (grid icon). Clicking it opens a room selection modal showing all available rooms for the booking's room type and dates, grouped by floor.

- Rooms that are inactive, already booked for those dates, or assigned to a checked-in booking are shown as disabled.
- Select exactly the number of rooms that were booked.
- Click **Save**.

This can be done at any time after the booking is created, for both offline and online bookings.

### Assigning Rooms at Check-In

Room selection is **mandatory** before a booking can be checked in. When an admin changes a booking's status to Checked In — from either **All Bookings** or **Today's Check-ins** — the room selection modal opens automatically.

The check-in is only completed after rooms are selected and confirmed. Closing or cancelling the modal leaves the booking in its current status without checking it in.

### Validation

| Rule | Behaviour |
|---|---|
| Wrong number of rooms selected | Save is blocked. A notification shows how many are required vs selected. |
| Room belongs to wrong room type | Save is blocked. Invalid rooms are rejected. |
| Room becomes occupied between opening the modal and saving | Save is blocked. An error lists the conflicting room numbers. Deselect them and choose available ones. |

---

## Online vs Offline Bookings

Both online bookings (made by guests through the website or app) and offline bookings (created by staff) follow the same room assignment flow described above. Guests never select specific room numbers — they only choose a room type and dates. Room number assignment is always an internal operational step performed by staff.
