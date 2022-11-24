import AMapLoader from '@amap/amap-jsapi-loader';

const initMap = AMapLoader.load({
  "key": "",              // 申请好的Web端开发者Key，首次调用 load 时必填
  "version": "2.0",   // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
  "plugins": [
    'AMap.ToolBar',
    'AMap.MoveAnimation',
    'AMap.Scale', // 右下角缩略图插件 比例尺
    'AMap.PlaceSearch',
    'AMap.PolyEditor', // 编辑 折线多，边形
    'AMap.Geocoder',
    'AMap.DistrictSearch',
    'AMap.Geolocation',
    'AMap.MarkerClusterer',
    'AMap.CircleEditor',
    'AMap.RectangleEditor'
  ],           // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  "AMapUI": {             // 是否加载 AMapUI，缺省不加载
    "version": '1.1',   // AMapUI 缺省 1.1
    "plugins":[
      'overlay/SimpleMarker'
    ],       // 需要加载的 AMapUI ui插件
  },
  "Loca":{                // 是否加载 Loca， 缺省不加载
    "version": '2.0'  // Loca 版本，缺省 1.3.2
  },
})

export {initMap}
