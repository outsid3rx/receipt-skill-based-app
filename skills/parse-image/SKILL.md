---
name: parse-image-rzdeli
description: Split the bill using the rzdeli.ru service
---

# Parse Image (rzdeli.ru)

## Instructions

Call the `run_js` tool with the following exact parameters:
- script name: index.html
- data: A JSON string with the items from the check in JSON format. If there are no items in the check, pass an empty array. The item names can be multiple lines long. The value field can be named "Сумма". Format: Array<{ title: string, price: number, count: number }>