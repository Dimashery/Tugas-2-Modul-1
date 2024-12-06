<?php
include 'db.php';

$data = json_decode(file_get_contents("php://input"), true);

$stmt = $pdo->prepare("UPDATE products SET name = ?, price = ?, description = ?, quantity = ? WHERE id = ?");
$stmt->execute([$data['name'], $data['price'], $data['description'], $data['quantity'], $data['id']]);

echo json_encode(["message" => "Product updated successfully"]);
?>
