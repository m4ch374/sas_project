# This is a very accurate model with 100% accuracy

# Assuming you are in ./backend/models/example
# You could run this command by: 
#   python3 accurate_model.py OR
#   python accurate_model.py

def compute_number(num: int):
    return num + 1

if __name__ == "__main__":
    input_num = 1
    print(f"Results after computing input={input_num}: {compute_number(input_num)}")
