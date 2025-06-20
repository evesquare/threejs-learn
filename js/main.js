import * as THREE from 'three';

// ページの読み込みを待つ
window.addEventListener('load', init);

function init() {
  // サイズを指定
  const width = 960;
  const height = 540;

  // レンダラーを作成
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#myCanvas'),
  });
  renderer.setSize(width, height);

  // シーンを作成
  const scene = new THREE.Scene();

  // カメラを作成
  const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
  camera.position.set(0, 500, +1000);
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  // コンテナーを作成
  const container = new THREE.Object3D();
  scene.add(container);

  // マテリアルを作成
  const material = new THREE.MeshStandardMaterial({
    color: 0xff0000,
    side: THREE.DoubleSide,
  });

  // 平行光源を作成
  const directionalLight = new THREE.DirectionalLight(0xffffff);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);
  // 環境光を作成
  const ambientLight = new THREE.AmbientLight(0x999999);
  scene.add(ambientLight);

  const geometry = new THREE.BoxGeometry(100, 100, 100)
  const mesh = new THREE.Mesh(geometry, material);
  container.add(mesh);
  // // ジオメトリを作成
  // const geometryList = [
  //   new THREE.SphereGeometry(50), // 球体
  //   new THREE.BoxGeometry(100, 100, 100), // 直方体
  //   new THREE.PlaneGeometry(100, 100), // 平面
  //   new THREE.TetrahedronGeometry(100, 0), // 三角錐
  //   new THREE.ConeGeometry(100, 100, 32), // 円錐
  //   new THREE.CylinderGeometry(50, 50, 100, 32), // 円柱
  //   new THREE.TorusGeometry(50, 30, 16, 100), // ドーナツ形状
  // ];

  // geometryList.map((geometry, index) => {
  //   // 形状とマテリアルからメッシュを作成します
  //   const mesh = new THREE.Mesh(geometry, material);

  //   // 3D表示インスタンスのsceneプロパティーが3D表示空間となります
  //   container.add(mesh);

  //   // 円周上に配置
  //   mesh.position.x = 400 * Math.sin((index / geometryList.length) * Math.PI * 2);
  //   mesh.position.z = 400 * Math.cos((index / geometryList.length) * Math.PI * 2);
  // });

  tick();

  // 毎フレーム時に実行されるループイベントです
  function tick() {
    // メッシュを回転させる
    container.rotation.y += 0.01;
    // レンダリング
    renderer.render(scene, camera);

    requestAnimationFrame(tick);
  }
}