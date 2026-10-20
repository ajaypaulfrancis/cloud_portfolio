import json
import os
import boto3

dynamodb = boto3.resource("dynamodb")
TABLE_NAME = os.environ.get("TABLE_NAME", "visitor_counter")

ALLOWED_ORIGINS = {
    "https://ajpaul.cloud",
    "https://www.ajpaul.cloud",
    "https://portfolio.ajpaul.cloud",
}

def lambda_handler(event, context):
    table = dynamodb.Table(TABLE_NAME)

    origin = (event.get("headers") or {}).get("origin", "")
    allow_origin = origin if origin in ALLOWED_ORIGINS else "https://ajpaul.cloud"

    response = table.update_item(
        Key={"site_id": "main"},
        UpdateExpression="ADD #count :incr",
        ExpressionAttributeNames={
            "#count": "count"
        },
        ExpressionAttributeValues={
            ":incr": 1
        },
        ReturnValues="UPDATED_NEW"
    )

    count = int(response["Attributes"]["count"])

    return {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": allow_origin,
        },
        "body": json.dumps({
            "count": count
        })
    }