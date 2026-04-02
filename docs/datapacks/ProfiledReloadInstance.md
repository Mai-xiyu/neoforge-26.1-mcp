# ProfiledReloadInstance

**Package:** `net.minecraft.server.packs.resources`
**Type:** class
**Extends:** `SimpleReloadInstance<ProfiledReloadInstance.State>`
**Side:** 🖧 Server

## Methods

### ProfiledReloadInstance

```java
public ProfiledReloadInstance(ResourceManager p_10649_, List<PreparableReloadListener> p_10650_, Executor p_10651_, Executor p_10652_, CompletableFuture<Unit> p_10653_)
```

**Parameters:**

- `p_10649_` (`ResourceManager`)
- `p_10650_` (`List<PreparableReloadListener>`)
- `p_10651_` (`Executor`)
- `p_10652_` (`Executor`)
- `p_10653_` (`CompletableFuture<Unit>`)

**Returns:** `public`

### finish

```java
private List<ProfiledReloadInstance.State> finish(List<ProfiledReloadInstance.State> p_215484_)
```

**Parameters:**

- `p_215484_` (`List<ProfiledReloadInstance.State>`)

**Returns:** `private List<ProfiledReloadInstance.State>`

### State

```java
 State(String p_10692_, ProfileResults p_10693_, ProfileResults p_10694_, AtomicLong p_10695_, AtomicLong p_10696_)
```

**Parameters:**

- `p_10692_` (`String`)
- `p_10693_` (`ProfileResults`)
- `p_10694_` (`ProfileResults`)
- `p_10695_` (`AtomicLong`)
- `p_10696_` (`AtomicLong`)

**Returns:** ``

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `State` | class |  |
