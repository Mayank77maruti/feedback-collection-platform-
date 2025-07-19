import pandas as pd
import openai
from typing import Any, cast

# Load your CSV file (make sure feedback.csv is in the same directory)
df = pd.read_csv('feedback.csv')

# Combine all feedback into one string (sample if very large)
all_feedback = " ".join(df['feedback'].astype(str).tolist())

# Set your OpenAI API key
openai.api_key = 'YOUR_OPENAI_API_KEY'  # <-- Replace with your OpenAI API key

# Summarize with OpenAI
def summarize_feedback(text):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": f"Summarize this feedback: {text}"}]
    )
    response = cast(dict, response)
    return response['choices'][0]['message']['content']

if __name__ == "__main__":
    print("Summarizing feedback...\n")
    summary = summarize_feedback(all_feedback)
    print("Summary:")
    print(summary)

# Instructions:
# 1. pip install openai pandas
# 2. Save your feedback as feedback.csv with a 'feedback' column.
# 3. Replace 'YOUR_OPENAI_API_KEY' with your OpenAI API key.
# 4. Run: python summarize_feedback.py 