<?php
include '../db.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

// Menangani GET untuk mengambil data produk
if ($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET['action']) && $_GET['action'] == 'get') {
    // Mengambil Semua Produk
    $sql = "SELECT * FROM new_products";
    $stmt = $pdo->prepare($sql);

    if ($stmt->execute()) {
        $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($products);  // Menampilkan data produk dalam format JSON
    } else {
        echo json_encode(["error" => "Error: " . $stmt->errorInfo()[2]]);
    }
}

// Menangani POST (Add) untuk menambah produk
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_GET['action']) && $_GET['action'] == 'add') {
    $data = json_decode(file_get_contents("php://input"), true);
    $name = $data['name'];
    $image = $data['image']; 
    $description = $data['description'];
    $price = $data['price'];

    // Validasi URL gambar
    if (filter_var($image, FILTER_VALIDATE_URL)) {
        $sql = "INSERT INTO new_products (name, image, description, price) VALUES (?, ?, ?, ?)";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(1, $name);
        $stmt->bindParam(2, $image);
        $stmt->bindParam(3, $description);
        $stmt->bindParam(4, $price);

        if ($stmt->execute()) {
            echo json_encode(["message" => "New product added successfully"]);
        } else {
            echo json_encode(["error" => "Error: " . $stmt->errorInfo()[2]]);
        }
    } else {
        echo json_encode(["error" => "Invalid image URL!"]);
    }
}

// Menangani PUT untuk memperbarui produk
if ($_SERVER['REQUEST_METHOD'] == 'PUT' && isset($_GET['action']) && $_GET['action'] == 'update') {
    $data = json_decode(file_get_contents("php://input"), true);
    $id = $data['id'];
    $name = $data['name'];
    $image = $data['image'];
    $description = $data['description'];
    $price = $data['price'];

    if (filter_var($image, FILTER_VALIDATE_URL)) {
        $sql = "UPDATE new_products SET name=?, image=?, description=?, price=? WHERE id=?";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(1, $name);
        $stmt->bindParam(2, $image);
        $stmt->bindParam(3, $description);
        $stmt->bindParam(4, $price);
        $stmt->bindParam(5, $id);

        if ($stmt->execute()) {
            echo json_encode(["message" => "Product updated successfully"]);
        } else {
            echo json_encode(["error" => "Error: " . $stmt->errorInfo()[2]]);
        }
    } else {
        echo json_encode(["error" => "Invalid image URL!"]);
    }
}

// Menangani DELETE untuk menghapus produk
if ($_SERVER['REQUEST_METHOD'] == 'DELETE' && isset($_GET['action']) && $_GET['action'] == 'delete') {
    $data = json_decode(file_get_contents("php://input"), true);
    $id = $data['id'];

    $sql = "DELETE FROM new_products WHERE id=?";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(1, $id);

    if ($stmt->execute()) {
        echo json_encode(["message" => "Product deleted successfully"]);
    } else {
        echo json_encode(["error" => "Error: " . $stmt->errorInfo()[2]]);
    }
}
?>
