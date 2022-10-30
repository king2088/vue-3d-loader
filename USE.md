# 注意事项

## 创建md文档

```bash
echo '' > README.md
```

## 乱码解决方法

访问出现乱码，这是因为默认PowerShell选择UTF-16编码，执行下面这句将编码指定为UTF-8：

```bash
$PSDefaultParameterValues['Out-File:Encoding'] = 'utf8'
```
