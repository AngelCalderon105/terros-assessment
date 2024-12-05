# Terros Coding Assesment

## Angel Calderon

## Setup Instructions

# Install Dependencies

npm install

# Run the Development Server

npm run dev

# React Component Design

## **Component Structure**

### **App.tsx**

- **Role:** Root Component, Manages Global States
- **State Management:**
  - `currentTurn`: Tracks which player’s turn it is
- **Functionality:**
  - Displays which player's turn it is.
  - Contains the `Board` component.

---

### **Board.tsx**

- **Role:** Container and State Manager for the Chess Game.
- **State Management:**
  - `board`: 2D array tracking the positions and types of all chess pieces
  - `selectedPiece`: Tracks the currently selected piece or `null` if none is selected
- **Functionality:**
  - Renders the chessboard and its pieces using `Tile` components
  - Validates moves with utility functions
  - Handles selecting pieces and moving them
  - Prevents capturing same player pieces

---

### **Tile.tsx**

- **Role:** Represents an individual tile on the chessboard.
- **Props:**
  - `piece`: The chess piece on this tile, if any.
  - `position`: The tile’s position on the board.
  - `tileColor`: Determines the tile's light/dark color.
  - `isSelected`: Indicates if the tile is currently selected.
  - `positionCallBack`: Callback to communicate with the `Board` component.
- **Functionality:**
  - Highlights when selected or invalid.
  - Notifies the `Board` when clicked.

---

### **Piece.tsx**

- **Role:** Displays chess pieces with their symbols.
- **Functionality:**
  - Renders the correct symbol for each piece based on its type and player.

---

## **Utils Folder**

- **Role:** Logic for Move Validation Chess Rules.
- **Files:**
  1. `moveValidation.ts`:
     - Central validation for each piece
  2. `pieceValidators.ts`:
  - Specific validation

---

## **Folder Structure**

```plaintext
src/
  components/
    Board.tsx
    Tile.tsx
    Piece.tsx
  utils/
    moveValidation.ts
    pieceValidators.ts
  App.tsx
```

# Feature Prioritization

I prioritized the most important features because time constraints and made sure to have a working Demo!
Check out my List and how I chose to prioritize each feature!

## **Basic Functionality**

- Render the board ✅
- Render the pieces ✅
- Allow selecting a piece and moving it to another tile ✅
- Move validation for basic rules✅
- Update the board state on valid moves ✅

---

## **Intermediate Features**

- Alternate turns between players

---

## **Future Features to Implement Next**

- Detect check/checkmate
- Add castling or en passant for pawns
- Highlight possible moves for the selected piece

# Thank you so much for this opportunity can't wait to hear back from the Team!
