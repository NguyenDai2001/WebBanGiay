<?php
    include('Connect.php');

    class data
    {

        // Trang chủ
                // Slider : 
                function select_slide()
                {
                    global $con;
                    $sql = "SELECT * FROM trangchu_slider ";
                    $run = mysqli_query($con,$sql);
                    return $run;
                    
                }
                // Sản phẩm 
                function  select_TOP10_sanpham()
                {
                    global $con;
                    $sql = "SELECT TOP(10) * FROM sanpham ORDER BY Ngay_nhap ASC  ";
                    $run = mysqli_query($con,$sql);
                    return $run;
                }
                

    }

    
?>