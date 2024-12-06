<?php
include 'db.php';

$data = json_decode(file_get_contents("php://input"), true);

$stmt = $pdo->prepare("INSERT INTO products (name, price, description, quantity) VALUES (?, ?, ?, ?)");
$stmt->execute([$data['name'], $data['price'], $data['description'], $data['quantity']]);

echo json_encode(["message" => "Product created successfully"]);
?>
