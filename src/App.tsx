import './App.css';
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  Vector3,
  HemisphereLight
} from 'three'

function App() {
  // 创建场景
  const scene = new Scene()

  // 创建相机
  const camera = new PerspectiveCamera(45, 500 / 500, 1, 1500)
  camera.position.set(100, 100, 1000)
  camera.lookAt(new Vector3(0, 0, 0))
  scene.add(camera)

  // 创建灯光
  const light = new HemisphereLight(0xffffff)
  light.position.set(0, 0, 200)
  scene.add(light)

  // 创建渲染器
  const renderer = new WebGLRenderer()
  // 画布背景设为白色
  renderer.setClearColor(0x000000)
  document.body.appendChild(renderer.domElement) // body元素中插入canvas对象

  // 执行渲染操作 指定场景、相机为参数
  renderer.render(scene, camera)

  return (
    <div className="App">
    </div>
  );
}

export default App;
