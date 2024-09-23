"""
Tic Tac Toe Player

"""

import math
import copy

X = "X"
O = "O"
EMPTY = ''


def initial_state():
    """
    Returns starting state of the board.

   
    """
    return [[EMPTY, EMPTY, EMPTY],
            [EMPTY, EMPTY, EMPTY],
            [EMPTY, EMPTY, EMPTY]]


def x_wins (board):
    for row in board:
        if all(cell == 'X' for cell in row):
         return True
    
    for col in range(3):
        if all(board[row][col] == 'X' for row in range(3)):
            return True
        

    if all(board[i][i] == 'X' for i in range(3)) or all(board[i][2-i]=='X' for i in range(3)):
        return True
    
    return False

def o_wins(board):
    # Check rows for 'O'
    for row in board:
        if all(cell == 'O' for cell in row):
            return True

    # Check columns for 'O'
    for col in range(3):
        if all(board[row][col] == 'O' for row in range(3)):
            return True

    # Check diagonals for 'O'
    if all(board[i][i] == 'O' for i in range(3)) or all(board[i][2 - i] == 'O' for i in range(3)):
        return True

    return False
    


def draw(board):
    return all(cell in ['X','O'] for row in board for cell in row)





# check if the board is terminal
  # check if x has won or o has won or it is a draw
    # return None

def player(board):
    """
    Returns the player who has the next turn on the board.
    """

    # if the board is terminal
    # check if there is a win a draw or a lose

    if winner(board):
        print(winner(board))

    move_x = sum(row.count('X') for row in board)
    move_o = sum(row.count('O') for row in board)
    
    # If X and O have played equal turns, it's X's turn; otherwise, it's O's turn.
    if move_x == move_o:
        return 'X'
    else:
        return 'O'

        

    # if the board is empty return X 


    # if the number of X's and the number of O's are equal return X but both of them ar less than 3


    # if the number of X's is greater than the number of O's return X
    



def actions (board):
    moves = []
    if x_wins(board) or o_wins(board) or draw(board):
     return []
    else:
        for i in range(len(board)):
            for j in range(len(board[i])):
                if board[i][j] not in ['X','O']:
                    moves.append((i,j))


    return moves
    


def result(board,action):
    i,j=action


    if board[i][j] != '':
        raise Exception("Invalid action")
    else:
        next_player = player(board)
        # print(f"the next player is {next_player}")

        new_board = copy.deepcopy(board)
        new_board[i][j] = next_player
        return new_board
    


def winner(board):
    if x_wins(board):
        return 'X'
    elif o_wins(board):
        return 'O'
    else:
        return None


def terminal(board):
    if winner(board) or draw(board):
        return True
    else:
        return False


def utility(board):
    if terminal(board):
        if x_wins(board):
            return 1
        elif o_wins(board):
            return -1
        else:
            return 0


def minimax(board):
    """
    Returns the optimal action for the current player on the board.
    """
    if terminal(board):
        return None

    best_move = None
    next_player = player(board)

    if next_player == 'X':  # MAX
        best_value = float("-inf")
        for action in actions(board):
            move_value = MIN_VALUE(result(board, action))  # Evaluate move
            if move_value > best_value:  # Check if this is a better move
                best_value = move_value
                best_move = action
    else:  # MIN (next_player == 'O')
        best_value = float("inf")
        for action in actions(board):
            move_value = MAX_VALUE(result(board, action))  # Evaluate move
            if move_value < best_value:  # Check if this is a better move
                best_value = move_value
                best_move = action

    return best_move
    



def MAX_VALUE(board):
    if terminal(board):
        return utility(board)

    # We are maximizing for player 'X'
    score = float("-inf")

    # Evaluate all possible actions for 'X'
    for action in actions(board):
        score = max(score, MIN_VALUE(result(board, action)))

    return score

def MIN_VALUE(board):
    if terminal(board):
        return utility(board)

    # We are minimizing for player 'O'
    score = float("inf")

    # Evaluate all possible actions for 'O'
    for action in actions(board):
        score = min(score, MAX_VALUE(result(board, action)))

    return score





               
              # if that move is better than the one we had make it the best move 
