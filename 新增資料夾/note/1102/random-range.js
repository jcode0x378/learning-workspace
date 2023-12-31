/**
 * 產生一個隨機整數，必須介於 10 到 20 （含 20）之間。
 *
 * 最小 random 出10倍的值但只會接近11(最大10.999)，再用 floor 向下取到整數。
 * 最大 取到的整數再 +10
 */
// Math.floor(Math.random() * 20) + 10;

Math.floor(Math.random() * 10) + 10;
