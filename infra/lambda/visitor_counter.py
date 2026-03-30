import json
import boto3

dynamodb = boto3.resource("dynamodb")
TABLE_NAME = "visitor_counter"

def lambda_handler(event, context):
    table = dynamodb.Table(TABLE_NAME)

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
            "Access-Control-Allow-Origin": "*"
        },
        "body": json.dumps({
            "count": count
        })
    }