type GPUBindingResource =

    | GPUSampler
    | GPUTextureView
    | GPUBufferBinding
    | GPUExternalTexture;
type GPUBufferDynamicOffset =
  number;
type GPUBufferUsageFlags =
  number;
type GPUColor =

    | Array<number>
    | GPUColorDict;
type GPUColorWriteFlags =
  number;
type GPUComputePassTimestampWrites =
  Array<GPUComputePassTimestampWrite>;
type GPUDepthBias =
  number;
type GPUExtent3D =

    | Array<GPUIntegerCoordinate>
    | GPUExtent3DDict;
type GPUFlagsConstant =
  number;
type GPUIndex32 =
  number;
type GPUIntegerCoordinate =
  number;
type GPUMapModeFlags =
  number;
type GPUOrigin2D =

    | Array<GPUIntegerCoordinate>
    | GPUOrigin2DDict;
type GPUOrigin3D =

    | Array<GPUIntegerCoordinate>
    | GPUOrigin3DDict;
type GPUPipelineConstantValue =
  number;
type GPURenderPassTimestampWrites =
  Array<GPURenderPassTimestampWrite>;
type GPUSampleMask =
  number;
type GPUShaderStageFlags =
  number;
type GPUSignedOffset32 =
  number;
type GPUSize32 =
  number;
type GPUSize64 =
  number;
type GPUStencilValue =
  number;
type GPUTextureUsageFlags =
  number;
type GPUAddressMode =

    | "clamp-to-edge"
    | "repeat"
    | "mirror-repeat";
type GPUAutoLayoutMode =
  "auto";
type GPUBlendFactor =

    | "zero"
    | "one"
    | "src"
    | "one-minus-src"
    | "src-alpha"
    | "one-minus-src-alpha"
    | "dst"
    | "one-minus-dst"
    | "dst-alpha"
    | "one-minus-dst-alpha"
    | "src-alpha-saturated"
    | "constant"
    | "one-minus-constant";
type GPUBlendOperation =

    | "add"
    | "subtract"
    | "reverse-subtract"
    | "min"
    | "max";
type GPUBufferBindingType =

    | "uniform"
    | "storage"
    | "read-only-storage";
type GPUBufferMapState =

    | "unmapped"
    | "pending"
    | "mapped";
type GPUCanvasAlphaMode =

    | "opaque"
    | "premultiplied";
type GPUCompareFunction =

    | "never"
    | "less"
    | "equal"
    | "less-equal"
    | "greater"
    | "not-equal"
    | "greater-equal"
    | "always";
type GPUCompilationMessageType =

    | "error"
    | "warning"
    | "info";
type GPUComputePassTimestampLocation =

    | "beginning"
    | "end";
type GPUCullMode =

    | "none"
    | "front"
    | "back";
type GPUDeviceLostReason =

    | "unknown"
    | "destroyed";
type GPUErrorFilter =

    | "validation"
    | "out-of-memory"
    | "internal";
type GPUFeatureName =

    | "depth-clip-control"
    | "depth32float-stencil8"
    | "texture-compression-bc"
    | "texture-compression-etc2"
    | "texture-compression-astc"
    | "timestamp-query"
    | "indirect-first-instance"
    | "shader-f16"
    | "rg11b10ufloat-renderable"
    | "bgra8unorm-storage"
    | "float32-filterable";
type GPUFilterMode =

    | "nearest"
    | "linear";
type GPUFrontFace =

    | "ccw"
    | "cw";
type GPUIndexFormat =

    | "uint16"
    | "uint32";
type GPULoadOp =

    | "load"
    | "clear";
type GPUMipmapFilterMode =

    | "nearest"
    | "linear";
type GPUPipelineErrorReason =

    | "validation"
    | "internal";
type GPUPowerPreference =

    | "low-power"
    | "high-performance";
type GPUPrimitiveTopology =

    | "point-list"
    | "line-list"
    | "line-strip"
    | "triangle-list"
    | "triangle-strip";
type GPUQueryType =

    | "occlusion"
    | "timestamp";
type GPURenderPassTimestampLocation =

    | "beginning"
    | "end";
type GPUSamplerBindingType =

    | "filtering"
    | "non-filtering"
    | "comparison";
type GPUStencilOperation =

    | "keep"
    | "zero"
    | "replace"
    | "invert"
    | "increment-clamp"
    | "decrement-clamp"
    | "increment-wrap"
    | "decrement-wrap";
type GPUStorageTextureAccess =
  "write-only";
type GPUStoreOp =

    | "store"
    | "discard";
type GPUTextureAspect =

    | "all"
    | "stencil-only"
    | "depth-only";
type GPUTextureDimension =

    | "1d"
    | "2d"
    | "3d";
type GPUTextureFormat =

    | "r8unorm"
    | "r8snorm"
    | "r8uint"
    | "r8sint"
    | "r16uint"
    | "r16sint"
    | "r16float"
    | "rg8unorm"
    | "rg8snorm"
    | "rg8uint"
    | "rg8sint"
    | "r32uint"
    | "r32sint"
    | "r32float"
    | "rg16uint"
    | "rg16sint"
    | "rg16float"
    | "rgba8unorm"
    | "rgba8unorm-srgb"
    | "rgba8snorm"
    | "rgba8uint"
    | "rgba8sint"
    | "bgra8unorm"
    | "bgra8unorm-srgb"
    | "rgb9e5ufloat"
    | "rgb10a2unorm"
    | "rg11b10ufloat"
    | "rg32uint"
    | "rg32sint"
    | "rg32float"
    | "rgba16uint"
    | "rgba16sint"
    | "rgba16float"
    | "rgba32uint"
    | "rgba32sint"
    | "rgba32float"
    | "stencil8"
    | "depth16unorm"
    | "depth24plus"
    | "depth24plus-stencil8"
    | "depth32float"
    | "depth32float-stencil8"
    | "bc1-rgba-unorm"
    | "bc1-rgba-unorm-srgb"
    | "bc2-rgba-unorm"
    | "bc2-rgba-unorm-srgb"
    | "bc3-rgba-unorm"
    | "bc3-rgba-unorm-srgb"
    | "bc4-r-unorm"
    | "bc4-r-snorm"
    | "bc5-rg-unorm"
    | "bc5-rg-snorm"
    | "bc6h-rgb-ufloat"
    | "bc6h-rgb-float"
    | "bc7-rgba-unorm"
    | "bc7-rgba-unorm-srgb"
    | "etc2-rgb8unorm"
    | "etc2-rgb8unorm-srgb"
    | "etc2-rgb8a1unorm"
    | "etc2-rgb8a1unorm-srgb"
    | "etc2-rgba8unorm"
    | "etc2-rgba8unorm-srgb"
    | "eac-r11unorm"
    | "eac-r11snorm"
    | "eac-rg11unorm"
    | "eac-rg11snorm"
    | "astc-4x4-unorm"
    | "astc-4x4-unorm-srgb"
    | "astc-5x4-unorm"
    | "astc-5x4-unorm-srgb"
    | "astc-5x5-unorm"
    | "astc-5x5-unorm-srgb"
    | "astc-6x5-unorm"
    | "astc-6x5-unorm-srgb"
    | "astc-6x6-unorm"
    | "astc-6x6-unorm-srgb"
    | "astc-8x5-unorm"
    | "astc-8x5-unorm-srgb"
    | "astc-8x6-unorm"
    | "astc-8x6-unorm-srgb"
    | "astc-8x8-unorm"
    | "astc-8x8-unorm-srgb"
    | "astc-10x5-unorm"
    | "astc-10x5-unorm-srgb"
    | "astc-10x6-unorm"
    | "astc-10x6-unorm-srgb"
    | "astc-10x8-unorm"
    | "astc-10x8-unorm-srgb"
    | "astc-10x10-unorm"
    | "astc-10x10-unorm-srgb"
    | "astc-12x10-unorm"
    | "astc-12x10-unorm-srgb"
    | "astc-12x12-unorm"
    | "astc-12x12-unorm-srgb";
type GPUTextureSampleType =

    | "float"
    | "unfilterable-float"
    | "depth"
    | "sint"
    | "uint";
type GPUTextureViewDimension =

    | "1d"
    | "2d"
    | "2d-array"
    | "cube"
    | "cube-array"
    | "3d";
type GPUVertexFormat =

    | "uint8x2"
    | "uint8x4"
    | "sint8x2"
    | "sint8x4"
    | "unorm8x2"
    | "unorm8x4"
    | "snorm8x2"
    | "snorm8x4"
    | "uint16x2"
    | "uint16x4"
    | "sint16x2"
    | "sint16x4"
    | "unorm16x2"
    | "unorm16x4"
    | "snorm16x2"
    | "snorm16x4"
    | "float16x2"
    | "float16x4"
    | "float32"
    | "float32x2"
    | "float32x3"
    | "float32x4"
    | "uint32"
    | "uint32x2"
    | "uint32x3"
    | "uint32x4"
    | "sint32"
    | "sint32x2"
    | "sint32x3"
    | "sint32x4";
type GPUVertexStepMode =

    | "vertex"
    | "instance";

interface GPUBindGroupDescriptor
  extends GPUObjectDescriptorBase {
  /**
   * The {@link GPUBindGroupLayout} the entries of this bind group will conform to.
   */
  layout: GPUBindGroupLayout;
  /**
   * A list of entries describing the resources to expose to the shader for each binding
   * described by the {@link GPUBindGroupDescriptor#layout}.
   */
  entries: Array<GPUBindGroupEntry>;
}

interface GPUBindGroupEntry {
  /**
   * A unique identifier for a resource binding within the {@link GPUBindGroup}, corresponding to a
   * {@link GPUBindGroupLayoutEntry#binding|GPUBindGroupLayoutEntry.binding} and a @binding
   * attribute in the {@link GPUShaderModule}.
   */
  binding: GPUIndex32;
  /**
   * The resource to bind, which may be a {@link GPUSampler}, {@link GPUTextureView},
   * {@link GPUExternalTexture}, or {@link GPUBufferBinding}.
   */
  resource: GPUBindingResource;
}

interface GPUBindGroupLayoutDescriptor
  extends GPUObjectDescriptorBase {
  entries: Array<GPUBindGroupLayoutEntry>;
}

interface GPUBindGroupLayoutEntry {
  /**
   * A unique identifier for a resource binding within the {@link GPUBindGroupLayout}, corresponding
   * to a {@link GPUBindGroupEntry#binding|GPUBindGroupEntry.binding} and a @binding
   * attribute in the {@link GPUShaderModule}.
   */
  binding: GPUIndex32;
  /**
   * A bitset of the members of {@link GPUShaderStage}.
   * Each set bit indicates that a {@link GPUBindGroupLayoutEntry}'s resource
   * will be accessible from the associated shader stage.
   */
  visibility: GPUShaderStageFlags;
  /**
   * When map/exist|provided, indicates the binding resource type for this {@link GPUBindGroupLayoutEntry}
   * is {@link GPUBufferBinding}.
   */
  buffer?: GPUBufferBindingLayout;
  /**
   * When map/exist|provided, indicates the binding resource type for this {@link GPUBindGroupLayoutEntry}
   * is {@link GPUSampler}.
   */
  sampler?: GPUSamplerBindingLayout;
  /**
   * When map/exist|provided, indicates the binding resource type for this {@link GPUBindGroupLayoutEntry}
   * is {@link GPUTextureView}.
   */
  texture?: GPUTextureBindingLayout;
  /**
   * When map/exist|provided, indicates the binding resource type for this {@link GPUBindGroupLayoutEntry}
   * is {@link GPUTextureView}.
   */
  storageTexture?: GPUStorageTextureBindingLayout;
  /**
   * When map/exist|provided, indicates the binding resource type for this {@link GPUBindGroupLayoutEntry}
   * is {@link GPUExternalTexture}.
   */
  externalTexture?: GPUExternalTextureBindingLayout;
}

interface GPUBlendComponent {
  /**
   * Defines the {@link GPUBlendOperation} used to calculate the values written to the target
   * attachment components.
   */
  operation?: GPUBlendOperation;
  /**
   * Defines the {@link GPUBlendFactor} operation to be performed on values from the fragment shader.
   */
  srcFactor?: GPUBlendFactor;
  /**
   * Defines the {@link GPUBlendFactor} operation to be performed on values from the target attachment.
   */
  dstFactor?: GPUBlendFactor;
}

interface GPUBlendState {
  color: GPUBlendComponent;
  alpha: GPUBlendComponent;
}

interface GPUBufferBinding {
  /**
   * The {@link GPUBuffer} to bind.
   */
  buffer: GPUBuffer;
  /**
   * The offset, in bytes, from the beginning of {@link GPUBufferBinding#buffer} to the
   * beginning of the range exposed to the shader by the buffer binding.
   */
  offset?: GPUSize64;
  /**
   * The size, in bytes, of the buffer binding.
   * If not map/exist|provided, specifies the range starting at
   * {@link GPUBufferBinding#offset} and ending at the end of {@link GPUBufferBinding#buffer}.
   */
  size?: GPUSize64;
}

interface GPUBufferBindingLayout {
  /**
   * Indicates the type required for buffers bound to this bindings.
   */
  type?: GPUBufferBindingType;
  /**
   * Indicates whether this binding requires a dynamic offset.
   */
  hasDynamicOffset?: boolean;
  /**
   * Indicates the minimum {@link GPUBufferBinding#size} of a buffer binding used with this bind point.
   * Bindings are always validated against this size in {@link GPUDevice#createBindGroup}.
   * If this *is not* `0`, pipeline creation additionally [$validating shader binding|validates$]
   * that this value &ge; the minimum buffer binding size of the variable.
   * If this *is* `0`, it is ignored by pipeline creation, and instead draw/dispatch commands
   * [$Validate encoder bind groups|validate$] that each binding in the {@link GPUBindGroup}
   * satisfies the minimum buffer binding size of the variable.
   * Note:
   * Similar execution-time validation is theoretically possible for other
   * binding-related fields specified for early validation, like
   * {@link GPUTextureBindingLayout#sampleType} and {@link GPUStorageTextureBindingLayout#format},
   * which currently can only be validated in pipeline creation.
   * However, such execution-time validation could be costly or unnecessarily complex, so it is
   * available only for {@link GPUBufferBindingLayout#minBindingSize} which is expected to have the
   * most ergonomic impact.
   */
  minBindingSize?: GPUSize64;
}

interface GPUBufferDescriptor
  extends GPUObjectDescriptorBase {
  /**
   * The size of the buffer in bytes.
   */
  size: GPUSize64;
  /**
   * The allowed usages for the buffer.
   */
  usage: GPUBufferUsageFlags;
  /**
   * If `true` creates the buffer in an already mapped state, allowing
   * {@link GPUBuffer#getMappedRange} to be called immediately. It is valid to set
   * {@link GPUBufferDescriptor#mappedAtCreation} to `true` even if {@link GPUBufferDescriptor#usage}
   * does not contain {@link GPUBufferUsage#MAP_READ} or {@link GPUBufferUsage#MAP_WRITE}. This can be
   * used to set the buffer's initial data.
   * Guarantees that even if the buffer creation eventually fails, it will still appear as if the
   * mapped range can be written/read to until it is unmapped.
   */
  mappedAtCreation?: boolean;
}

interface GPUCanvasConfiguration {
  /**
   * The {@link GPUDevice} that textures returned by {@link GPUCanvasContext#getCurrentTexture} will be
   * compatible with.
   */
  device: GPUDevice;
  /**
   * The format that textures returned by {@link GPUCanvasContext#getCurrentTexture} will have.
   * Must be one of the Supported context formats.
   */
  format: GPUTextureFormat;
  /**
   * The usage that textures returned by {@link GPUCanvasContext#getCurrentTexture} will have.
   * {@link GPUTextureUsage#RENDER_ATTACHMENT} is the default, but is not automatically included
   * if the usage is explicitly set. Be sure to include {@link GPUTextureUsage#RENDER_ATTACHMENT}
   * when setting a custom usage if you wish to use textures returned by
   * {@link GPUCanvasContext#getCurrentTexture} as color targets for a render pass.
   */
  usage?: GPUTextureUsageFlags;
  /**
   * The formats that views created from textures returned by
   * {@link GPUCanvasContext#getCurrentTexture} may use.
   */
  viewFormats?: Array<GPUTextureFormat>;
  /**
   * The color space that values written into textures returned by
   * {@link GPUCanvasContext#getCurrentTexture} should be displayed with.
   */
  colorSpace?: PredefinedColorSpace;
  /**
   * Determines the effect that alpha values will have on the content of textures returned by
   * {@link GPUCanvasContext#getCurrentTexture} when read, displayed, or used as an image source.
   */
  alphaMode?: GPUCanvasAlphaMode;
}

interface GPUColorDict {
  r: number;
  g: number;
  b: number;
  a: number;
}

interface GPUColorTargetState {
  format: GPUTextureFormat;
  blend?: GPUBlendState;
  writeMask?: GPUColorWriteFlags;
}

type GPUCommandBufferDescriptor =
  GPUObjectDescriptorBase;
type GPUCommandEncoderDescriptor =
  GPUObjectDescriptorBase;

interface GPUComputePassDescriptor
  extends GPUObjectDescriptorBase {
  /**
   * A sequence of {@link GPUComputePassTimestampWrite} values define where and when timestamp values will be written for this pass.
   */
  timestampWrites?: GPUComputePassTimestampWrites;
}

interface GPUComputePassTimestampWrite {
  querySet: GPUQuerySet;
  queryIndex: GPUSize32;
  location: GPUComputePassTimestampLocation;
}

interface GPUComputePipelineDescriptor
  extends GPUPipelineDescriptorBase {
  /**
   * Describes the compute shader entry point of the pipeline.
   */
  compute: GPUProgrammableStage;
}

interface GPUDepthStencilState {
  /**
   * The {@link GPUTextureViewDescriptor#format} of {@link GPURenderPassDescriptor#depthStencilAttachment}
   * this {@link GPURenderPipeline} will be compatible with.
   */
  format: GPUTextureFormat;
  /**
   * Indicates if this {@link GPURenderPipeline} can modify
   * {@link GPURenderPassDescriptor#depthStencilAttachment} depth values.
   */
  depthWriteEnabled: boolean;
  /**
   * The comparison operation used to test fragment depths against
   * {@link GPURenderPassDescriptor#depthStencilAttachment} depth values.
   */
  depthCompare: GPUCompareFunction;
  /**
   * Defines how stencil comparisons and operations are performed for front-facing primitives.
   */
  stencilFront?: GPUStencilFaceState;
  /**
   * Defines how stencil comparisons and operations are performed for back-facing primitives.
   */
  stencilBack?: GPUStencilFaceState;
  /**
   * Bitmask controlling which {@link GPURenderPassDescriptor#depthStencilAttachment} stencil value
   * bits are read when performing stencil comparison tests.
   */
  stencilReadMask?: GPUStencilValue;
  /**
   * Bitmask controlling which {@link GPURenderPassDescriptor#depthStencilAttachment} stencil value
   * bits are written to when performing stencil operations.
   */
  stencilWriteMask?: GPUStencilValue;
  /**
   * Constant depth bias added to each fragment. See [$biased fragment depth$] for details.
   */
  depthBias?: GPUDepthBias;
  /**
   * Depth bias that scales with the fragment’s slope. See [$biased fragment depth$] for details.
   */
  depthBiasSlopeScale?: number;
  /**
   * The maximum depth bias of a fragment. See [$biased fragment depth$] for details.
   */
  depthBiasClamp?: number;
}

interface GPUDeviceDescriptor
  extends GPUObjectDescriptorBase {
  /**
   * Specifies the features that are required by the device request.
   * The request will fail if the adapter cannot provide these features.
   * Exactly the specified set of features, and no more or less, will be allowed in validation
   * of API calls on the resulting device.
   */
  requiredFeatures?: Array<GPUFeatureName>;
  /**
   * Specifies the limits that are required by the device request.
   * The request will fail if the adapter cannot provide these limits.
   * Each key must be the name of a member of supported limits.
   * Exactly the specified limits, and no limit/better or worse,
   * will be allowed in validation of API calls on the resulting device.
   * <!-- If we ever need limit types other than GPUSize32/GPUSize64, we can change the value
   * type to `double` or `any` in the future and write out the type conversion explicitly (by
   * reference to WebIDL spec). Or change the entire type to `any` and add back a `dictionary
   * GPULimits` and define the conversion of the whole object by reference to WebIDL. -->
   */
  requiredLimits?: Record<
    string,
    GPUSize64
  >;
  /**
   * The descriptor for the default {@link GPUQueue}.
   */
  defaultQueue?: GPUQueueDescriptor;
}

interface GPUExtent3DDict {
  width: GPUIntegerCoordinate;
  height?: GPUIntegerCoordinate;
  depthOrArrayLayers?: GPUIntegerCoordinate;
}

interface GPUExternalTextureBindingLayout {}

interface GPUExternalTextureDescriptor
  extends GPUObjectDescriptorBase {
  source: HTMLVideoElement;
  colorSpace?: PredefinedColorSpace;
}

interface GPUFragmentState
  extends GPUProgrammableStage {
  targets: Array<GPUColorTargetState | null>;
}

interface GPUMultisampleState {
  /**
   * Number of samples per pixel. This {@link GPURenderPipeline} will be compatible only
   * with attachment textures ({@link GPURenderPassDescriptor#colorAttachments}
   * and {@link GPURenderPassDescriptor#depthStencilAttachment})
   * with matching {@link GPUTextureDescriptor#sampleCount}s.
   */
  count?: GPUSize32;
  /**
   * Mask determining which samples are written to.
   */
  mask?: GPUSampleMask;
  /**
   * When `true` indicates that a fragment's alpha channel should be used to generate a sample
   * coverage mask.
   */
  alphaToCoverageEnabled?: boolean;
}

interface GPUObjectDescriptorBase {
  /**
   * The initial value of {@link GPUObjectBase#label|GPUObjectBase.label}.
   */
  label?: string;
}

interface GPUOrigin2DDict {
  x?: GPUIntegerCoordinate;
  y?: GPUIntegerCoordinate;
}

interface GPUOrigin3DDict {
  x?: GPUIntegerCoordinate;
  y?: GPUIntegerCoordinate;
  z?: GPUIntegerCoordinate;
}

interface GPUPipelineDescriptorBase
  extends GPUObjectDescriptorBase {
  layout:
    | GPUPipelineLayout
    | GPUAutoLayoutMode;
}

interface GPUPipelineErrorInit {
  reason: GPUPipelineErrorReason;
}

interface GPUPipelineLayoutDescriptor
  extends GPUObjectDescriptorBase {
  /**
   * A list of {@link GPUBindGroupLayout}s the pipeline will use. Each element corresponds to a
   * @group attribute in the {@link GPUShaderModule}, with the `N`th element corresponding with
   * `@group(N)`.
   */
  bindGroupLayouts: Array<GPUBindGroupLayout>;
}

interface GPUPrimitiveState {
  /**
   * The type of primitive to be constructed from the vertex inputs.
   */
  topology?: GPUPrimitiveTopology;
  /**
   * For pipelines with strip topologies
   * ({@link GPUPrimitiveTopology#"line-strip"} or {@link GPUPrimitiveTopology#"triangle-strip"}),
   * this determines the index buffer format and primitive restart value
   * ({@link GPUIndexFormat#"uint16"}/`0xFFFF` or {@link GPUIndexFormat#"uint32"}/`0xFFFFFFFF`).
   * It is not allowed on pipelines with non-strip topologies.
   * Note: Some implementations require knowledge of the primitive restart value to compile
   * pipeline state objects.
   * To use a strip-topology pipeline with an indexed draw call
   * ({@link GPURenderCommandsMixin#drawIndexed()} or {@link GPURenderCommandsMixin#drawIndexedIndirect}),
   * this must be set, and it must match the index buffer format used with the draw call
   * (set in {@link GPURenderCommandsMixin#setIndexBuffer}).
   * See [[#primitive-assembly]] for additional details.
   */
  stripIndexFormat?: GPUIndexFormat;
  /**
   * Defines which polygons are considered front-facing.
   */
  frontFace?: GPUFrontFace;
  /**
   * Defines which polygon orientation will be culled, if any.
   */
  cullMode?: GPUCullMode;
  /**
   * If true, indicates that depth clipping is disabled.
   * Requires the {@link GPUFeatureName#"depth-clip-control"} feature to be enabled.
   */
  unclippedDepth?: boolean;
}

interface GPUProgrammableStage {
  module: GPUShaderModule;
  entryPoint: string;
  constants?: Record<
    string,
    GPUPipelineConstantValue
  >;
}

interface GPUQuerySetDescriptor
  extends GPUObjectDescriptorBase {
  /**
   * The type of queries managed by {@link GPUQuerySet}.
   */
  type: GPUQueryType;
  /**
   * The number of queries managed by {@link GPUQuerySet}.
   */
  count: GPUSize32;
}

type GPUQueueDescriptor =
  GPUObjectDescriptorBase;
type GPURenderBundleDescriptor =
  GPUObjectDescriptorBase;

interface GPURenderBundleEncoderDescriptor
  extends GPURenderPassLayout {
  depthReadOnly?: boolean;
  stencilReadOnly?: boolean;
}

interface GPURenderPassColorAttachment {
  /**
   * A {@link GPUTextureView} describing the texture subresource that will be output to for this
   * color attachment.
   */
  view: GPUTextureView;
  /**
   * A {@link GPUTextureView} describing the texture subresource that will receive the resolved
   * output for this color attachment if {@link GPURenderPassColorAttachment#view} is
   * multisampled.
   */
  resolveTarget?: GPUTextureView;
  /**
   * Indicates the value to clear {@link GPURenderPassColorAttachment#view} to prior to executing the
   * render pass. If not map/exist|provided, defaults to `{r: 0, g: 0, b: 0, a: 0}`. Ignored
   * if {@link GPURenderPassColorAttachment#loadOp} is not {@link GPULoadOp#"clear"}.
   * The components of {@link GPURenderPassColorAttachment#clearValue} are all double values.
   * They are converted [$to a texel value of texture format$] matching the render attachment.
   * If conversion fails, a validation error is generated.
   */
  clearValue?: GPUColor;
  /**
   * Indicates the load operation to perform on {@link GPURenderPassColorAttachment#view} prior to
   * executing the render pass.
   * Note: It is recommended to prefer clearing; see {@link GPULoadOp#"clear"} for details.
   */
  loadOp: GPULoadOp;
  /**
   * The store operation to perform on {@link GPURenderPassColorAttachment#view}
   * after executing the render pass.
   */
  storeOp: GPUStoreOp;
}

interface GPURenderPassDepthStencilAttachment {
  /**
   * A {@link GPUTextureView} describing the texture subresource that will be output to
   * and read from for this depth/stencil attachment.
   */
  view: GPUTextureView;
  /**
   * Indicates the value to clear {@link GPURenderPassDepthStencilAttachment#view}'s depth component
   * to prior to executing the render pass. Ignored if {@link GPURenderPassDepthStencilAttachment#depthLoadOp}
   * is not {@link GPULoadOp#"clear"}. Must be between 0.0 and 1.0, inclusive.
   * <!-- POSTV1(unrestricted-depth): unless unrestricted depth is enabled -->
   */
  depthClearValue?: number;
  /**
   * Indicates the load operation to perform on {@link GPURenderPassDepthStencilAttachment#view}'s
   * depth component prior to executing the render pass.
   * Note: It is recommended to prefer clearing; see {@link GPULoadOp#"clear"} for details.
   */
  depthLoadOp?: GPULoadOp;
  /**
   * The store operation to perform on {@link GPURenderPassDepthStencilAttachment#view}'s
   * depth component after executing the render pass.
   */
  depthStoreOp?: GPUStoreOp;
  /**
   * Indicates that the depth component of {@link GPURenderPassDepthStencilAttachment#view}
   * is read only.
   */
  depthReadOnly?: boolean;
  /**
   * Indicates the value to clear {@link GPURenderPassDepthStencilAttachment#view}'s stencil component
   * to prior to executing the render pass. Ignored if {@link GPURenderPassDepthStencilAttachment#stencilLoadOp}
   * is not {@link GPULoadOp#"clear"}.
   * The value will be converted to the type of the stencil aspect of `view` by taking the same
   * number of LSBs as the number of bits in the stencil aspect of one texel block of `view`.
   */
  stencilClearValue?: GPUStencilValue;
  /**
   * Indicates the load operation to perform on {@link GPURenderPassDepthStencilAttachment#view}'s
   * stencil component prior to executing the render pass.
   * Note: It is recommended to prefer clearing; see {@link GPULoadOp#"clear"} for details.
   */
  stencilLoadOp?: GPULoadOp;
  /**
   * The store operation to perform on {@link GPURenderPassDepthStencilAttachment#view}'s
   * stencil component after executing the render pass.
   */
  stencilStoreOp?: GPUStoreOp;
  /**
   * Indicates that the stencil component of {@link GPURenderPassDepthStencilAttachment#view}
   * is read only.
   */
  stencilReadOnly?: boolean;
}

interface GPURenderPassDescriptor
  extends GPUObjectDescriptorBase {
  /**
   * The set of {@link GPURenderPassColorAttachment} values in this sequence defines which
   * color attachments will be output to when executing this render pass.
   * Due to compatible usage list|usage compatibility, no color attachment
   * may alias another attachment or any resource used inside the render pass.
   */
  colorAttachments: Array<GPURenderPassColorAttachment | null>;
  /**
   * The {@link GPURenderPassDepthStencilAttachment} value that defines the depth/stencil
   * attachment that will be output to and tested against when executing this render pass.
   * Due to compatible usage list|usage compatibility, no writable depth/stencil attachment
   * may alias another attachment or any resource used inside the render pass.
   */
  depthStencilAttachment?: GPURenderPassDepthStencilAttachment;
  /**
   * The {@link GPUQuerySet} value defines where the occlusion query results will be stored for this pass.
   */
  occlusionQuerySet?: GPUQuerySet;
  /**
   * A sequence of {@link GPURenderPassTimestampWrite} values defines where and when timestamp values will be written for this pass.
   */
  timestampWrites?: GPURenderPassTimestampWrites;
  /**
   * The maximum number of draw calls that will be done in the render pass. Used by some
   * implementations to size work injected before the render pass. Keeping the default value
   * is a good default, unless it is known that more draw calls will be done.
   */
  maxDrawCount?: GPUSize64;
}

interface GPURenderPassLayout
  extends GPUObjectDescriptorBase {
  colorFormats: Array<GPUTextureFormat | null>;
  depthStencilFormat?: GPUTextureFormat;
  sampleCount?: GPUSize32;
}

interface GPURenderPassTimestampWrite {
  querySet: GPUQuerySet;
  queryIndex: GPUSize32;
  location: GPURenderPassTimestampLocation;
}

interface GPURenderPipelineDescriptor
  extends GPUPipelineDescriptorBase {
  /**
   * Describes the vertex shader entry point of the pipeline and its input buffer layouts.
   */
  vertex: GPUVertexState;
  /**
   * Describes the primitive-related properties of the pipeline.
   */
  primitive?: GPUPrimitiveState;
  /**
   * Describes the optional depth-stencil properties, including the testing, operations, and bias.
   */
  depthStencil?: GPUDepthStencilState;
  /**
   * Describes the multi-sampling properties of the pipeline.
   */
  multisample?: GPUMultisampleState;
  /**
   * Describes the fragment shader entry point of the pipeline and its output colors. If
   * not map/exist|provided, the [[#no-color-output]] mode is enabled.
   */
  fragment?: GPUFragmentState;
}

interface GPURequestAdapterOptions {
  powerPreference?: GPUPowerPreference;
  forceFallbackAdapter?: boolean;
}

interface GPUSamplerBindingLayout {
  /**
   * Indicates the required type of a sampler bound to this bindings.
   */
  type?: GPUSamplerBindingType;
}

interface GPUSamplerDescriptor
  extends GPUObjectDescriptorBase {
  /**
   */
  addressModeU?: GPUAddressMode;
  /**
   */
  addressModeV?: GPUAddressMode;
  /**
   * Specifies the {{GPUAddressMode|address modes}} for the texture width, height, and depth
   * coordinates, respectively.
   */
  addressModeW?: GPUAddressMode;
  /**
   * Specifies the sampling behavior when the sample footprint is smaller than or equal to one
   * texel.
   */
  magFilter?: GPUFilterMode;
  /**
   * Specifies the sampling behavior when the sample footprint is larger than one texel.
   */
  minFilter?: GPUFilterMode;
  /**
   * Specifies behavior for sampling between mipmap levels.
   */
  mipmapFilter?: GPUMipmapFilterMode;
  /**
   */
  lodMinClamp?: number;
  /**
   * Specifies the minimum and maximum levels of detail, respectively, used internally when
   * sampling a texture.
   */
  lodMaxClamp?: number;
  /**
   * When provided the sampler will be a comparison sampler with the specified
   * {@link GPUCompareFunction}.
   * Note: Comparison samplers may use filtering, but the sampling results will be
   * implementation-dependent and may differ from the normal filtering rules.
   */
  compare?: GPUCompareFunction;
  /**
   * Specifies the maximum anisotropy value clamp used by the sampler.
   * Note: Most implementations support {@link GPUSamplerDescriptor#maxAnisotropy} values in range
   * between 1 and 16, inclusive. The used value of {@link GPUSamplerDescriptor#maxAnisotropy} will
   * be clamped to the maximum value that the platform supports.
   */
  maxAnisotropy?: number;
}

interface GPUShaderModuleCompilationHint {
  /**
   * A {@link GPUPipelineLayout} that the {@link GPUShaderModule} may be used with in a future
   * {@link GPUDevice#createComputePipeline()} or {@link GPUDevice#createRenderPipeline} call.
   * If set to {@link GPUAutoLayoutMode#"auto"} the layout will be the [$default pipeline layout$]
   * for the entry point associated with this hint will be used.
   */
  layout?:
    | GPUPipelineLayout
    | GPUAutoLayoutMode;
}

interface GPUShaderModuleDescriptor
  extends GPUObjectDescriptorBase {
  /**
   * The <a href="https://gpuweb.github.io/gpuweb/wgsl/">WGSL</a> source code for the shader
   * module.
   */
  code: string;
  /**
   * If defined MAY be interpreted as a source-map-v3 format.
   * Source maps are optional, but serve as a standardized way to support dev-tool
   * integration such as source-language debugging [[SourceMap]].
   * WGSL names (identifiers) in source maps follow the rules defined in WGSL identifier
   * comparison.
   */
  sourceMap?: any;
  /**
   * If defined maps an entry point name from the shader to a {@link GPUShaderModuleCompilationHint}.
   * No validation is performed with any of these {@link GPUShaderModuleCompilationHint}.
   * Implementations should use any information present in the {@link GPUShaderModuleCompilationHint}
   * to perform as much compilation as is possible within {@link GPUDevice#createShaderModule}.
   * Entry point names follow the rules defined in WGSL identifier comparison.
   * Note: Supplying information in {@link GPUShaderModuleDescriptor#hints} does not have any
   * observable effect, other than performance. Because a single shader module can hold
   * multiple entry points, and multiple pipelines can be created from a single shader
   * module, it can be more performant for an implementation to do as much compilation as
   * possible once in {@link GPUDevice#createShaderModule} rather than multiple times in
   * the multiple calls to {@link GPUDevice#createComputePipeline} /
   * {@link GPUDevice#createRenderPipeline}.
   */
  hints?: Record<
    string,
    GPUShaderModuleCompilationHint
  >;
}

interface GPUStencilFaceState {
  /**
   * The {@link GPUCompareFunction} used when testing fragments against
   * {@link GPURenderPassDescriptor#depthStencilAttachment} stencil values.
   */
  compare?: GPUCompareFunction;
  /**
   * The {@link GPUStencilOperation} performed if the fragment stencil comparison test described by
   * {@link GPUStencilFaceState#compare} fails.
   */
  failOp?: GPUStencilOperation;
  /**
   * The {@link GPUStencilOperation} performed if the fragment depth comparison described by
   * {@link GPUDepthStencilState#depthCompare} fails.
   */
  depthFailOp?: GPUStencilOperation;
  /**
   * The {@link GPUStencilOperation} performed if the fragment stencil comparison test described by
   * {@link GPUStencilFaceState#compare} passes.
   */
  passOp?: GPUStencilOperation;
}

interface GPUStorageTextureBindingLayout {
  /**
   * The access mode for this binding, indicating readability and writability.
   * Note:
   * There is currently only one access mode, {@link GPUStorageTextureAccess#"write-only"},
   * but this will expand in the future.
   */
  access?: GPUStorageTextureAccess;
  /**
   * The required {@link GPUTextureViewDescriptor#format} of texture views bound to this binding.
   */
  format: GPUTextureFormat;
  /**
   * Indicates the required {@link GPUTextureViewDescriptor#dimension} for texture views bound to
   * this binding.
   */
  viewDimension?: GPUTextureViewDimension;
}

interface GPUTextureBindingLayout {
  /**
   * Indicates the type required for texture views bound to this binding.
   */
  sampleType?: GPUTextureSampleType;
  /**
   * Indicates the required {@link GPUTextureViewDescriptor#dimension} for texture views bound to
   * this binding.
   */
  viewDimension?: GPUTextureViewDimension;
  /**
   * Indicates whether or not texture views bound to this binding must be multisampled.
   */
  multisampled?: boolean;
}

interface GPUTextureDescriptor
  extends GPUObjectDescriptorBase {
  /**
   * The width, height, and depth or layer count of the texture.
   */
  size: GPUExtent3D;
  /**
   * The number of mip levels the texture will contain.
   */
  mipLevelCount?: GPUIntegerCoordinate;
  /**
   * The sample count of the texture. A {@link GPUTextureDescriptor#sampleCount} &gt; `1` indicates
   * a multisampled texture.
   */
  sampleCount?: GPUSize32;
  /**
   * Whether the texture is one-dimensional, an array of two-dimensional layers, or three-dimensional.
   */
  dimension?: GPUTextureDimension;
  /**
   * The format of the texture.
   */
  format: GPUTextureFormat;
  /**
   * The allowed usages for the texture.
   */
  usage: GPUTextureUsageFlags;
  /**
   * Specifies what view {@link GPUTextureViewDescriptor#format} values will be allowed when calling
   * {@link GPUTexture#createView} on this texture (in addition to the texture's actual
   * {@link GPUTextureDescriptor#format}).
   * <div class=note>
   * Note:
   * Adding a format to this list may have a significant performance impact, so it is best
   * to avoid adding formats unnecessarily.
   * The actual performance impact is highly dependent on the target system; developers must
   * test various systems to find out the impact on their particular application.
   * For example, on some systems any texture with a {@link GPUTextureDescriptor#format} or
   * {@link GPUTextureDescriptor#viewFormats} entry including
   * {@link GPUTextureFormat#"rgba8unorm-srgb"} will perform less optimally than a
   * {@link GPUTextureFormat#"rgba8unorm"} texture which does not.
   * Similar caveats exist for other formats and pairs of formats on other systems.
   * </div>
   * Formats in this list must be texture view format compatible with the texture format.
   * <div algorithm>
   * Two {@link GPUTextureFormat}s `format` and `viewFormat` are <dfn dfn for="">texture view format compatible</dfn> if:
   * - `format` equals `viewFormat`, or
   * - `format` and `viewFormat` differ only in whether they are `srgb` formats (have the `-srgb` suffix).
   * Issue(gpuweb/gpuweb#168): Define larger compatibility classes.
   * </div>
   */
  viewFormats?: Array<GPUTextureFormat>;
}

interface GPUTextureViewDescriptor
  extends GPUObjectDescriptorBase {
  /**
   * The format of the texture view. Must be either the {@link GPUTextureDescriptor#format} of the
   * texture or one of the {@link GPUTextureDescriptor#viewFormats} specified during its creation.
   */
  format?: GPUTextureFormat;
  /**
   * The dimension to view the texture as.
   */
  dimension?: GPUTextureViewDimension;
  /**
   * Which {@link GPUTextureAspect|aspect(s)} of the texture are accessible to the texture view.
   */
  aspect?: GPUTextureAspect;
  /**
   * The first (most detailed) mipmap level accessible to the texture view.
   */
  baseMipLevel?: GPUIntegerCoordinate;
  /**
   * How many mipmap levels, starting with {@link GPUTextureViewDescriptor#baseMipLevel}, are accessible to
   * the texture view.
   */
  mipLevelCount?: GPUIntegerCoordinate;
  /**
   * The index of the first array layer accessible to the texture view.
   */
  baseArrayLayer?: GPUIntegerCoordinate;
  /**
   * How many array layers, starting with {@link GPUTextureViewDescriptor#baseArrayLayer}, are accessible
   * to the texture view.
   */
  arrayLayerCount?: GPUIntegerCoordinate;
}

interface GPUUncapturedErrorEventInit
  extends EventInit {
  error: GPUError;
}

interface GPUVertexAttribute {
  /**
   * The {@link GPUVertexFormat} of the attribute.
   */
  format: GPUVertexFormat;
  /**
   * The offset, in bytes, from the beginning of the element to the data for the attribute.
   */
  offset: GPUSize64;
  /**
   * The numeric location associated with this attribute, which will correspond with a
   * <a href="https://gpuweb.github.io/gpuweb/wgsl/#input-output-locations">"@location" attribute</a>
   * declared in the {@link GPURenderPipelineDescriptor#vertex}.{@link GPUProgrammableStage#module|module}.
   */
  shaderLocation: GPUIndex32;
}

interface GPUVertexBufferLayout {
  /**
   * The stride, in bytes, between elements of this array.
   */
  arrayStride: GPUSize64;
  /**
   * Whether each element of this array represents per-vertex data or per-instance data
   */
  stepMode?: GPUVertexStepMode;
  /**
   * An array defining the layout of the vertex attributes within each element.
   */
  attributes: Array<GPUVertexAttribute>;
}

interface GPUVertexState
  extends GPUProgrammableStage {
  buffers?: Array<GPUVertexBufferLayout | null>;
}

interface GPUBindingCommandsMixin {
  /**
   * Sets the current {@link GPUBindGroup} for the given index.
   */
  setBindGroup(
    index: GPUIndex32,
    bindGroup: GPUBindGroup | null,
    dynamicOffsets?: Array<GPUBufferDynamicOffset>
  ): undefined;
  setBindGroup(
    index: GPUIndex32,
    bindGroup: GPUBindGroup | null,
    dynamicOffsetsData: Uint32Array,
    dynamicOffsetsDataStart: GPUSize64,
    dynamicOffsetsDataLength: GPUSize32
  ): undefined;
}

interface GPUCommandsMixin {}

interface GPUDebugCommandsMixin {
  /**
   * Begins a labeled debug group containing subsequent commands.
   * @param groupLabel - The label for the command group.
   */
  pushDebugGroup(
    groupLabel: string
  ): undefined;
  /**
   * Ends the labeled debug group most recently started by {@link GPUDebugCommandsMixin#pushDebugGroup}.
   */
  popDebugGroup(): undefined;
  /**
   * Marks a point in a stream of commands with a label.
   * @param markerLabel - The label to insert.
   */
  insertDebugMarker(
    markerLabel: string
  ): undefined;
}

interface GPUObjectBase {
  label: string;
}

interface GPUPipelineBase {
  /**
   * Gets a {@link GPUBindGroupLayout} that is compatible with the {@link GPUPipelineBase}'s
   * {@link GPUBindGroupLayout} at `index`.
   * @param index - Index into the pipeline layout's {@link GPUPipelineLayout#[[bindGroupLayouts]]}
   * 	sequence.
   */
  getBindGroupLayout(
    index: number
  ): GPUBindGroupLayout;
}

interface GPURenderCommandsMixin {
  /**
   * Sets the current {@link GPURenderPipeline}.
   * @param pipeline - The render pipeline to use for subsequent drawing commands.
   */
  setPipeline(
    pipeline: GPURenderPipeline
  ): undefined;
  /**
   * Sets the current index buffer.
   * @param buffer - Buffer containing index data to use for subsequent drawing commands.
   * @param indexFormat - Format of the index data contained in `buffer`.
   * @param offset - Offset in bytes into `buffer` where the index data begins. Defaults to `0`.
   * @param size - Size in bytes of the index data in `buffer`.
   * 	Defaults to the size of the buffer minus the offset.
   */
  setIndexBuffer(
    buffer: GPUBuffer,
    indexFormat: GPUIndexFormat,
    offset?: GPUSize64,
    size?: GPUSize64
  ): undefined;
  /**
   * Sets the current vertex buffer for the given slot.
   * @param slot - The vertex buffer slot to set the vertex buffer for.
   * @param buffer - Buffer containing vertex data to use for subsequent drawing commands.
   * @param offset - Offset in bytes into `buffer` where the vertex data begins. Defaults to `0`.
   * @param size - Size in bytes of the vertex data in `buffer`.
   * 	Defaults to the size of the buffer minus the offset.
   */
  setVertexBuffer(
    slot: GPUIndex32,
    buffer: GPUBuffer | null,
    offset?: GPUSize64,
    size?: GPUSize64
  ): undefined;
  /**
   * Draws primitives.
   * See [[#rendering-operations]] for the detailed specification.
   * @param vertexCount - The number of vertices to draw.
   * @param instanceCount - The number of instances to draw.
   * @param firstVertex - Offset into the vertex buffers, in vertices, to begin drawing from.
   * @param firstInstance - First instance to draw.
   */
  draw(
    vertexCount: GPUSize32,
    instanceCount?: GPUSize32,
    firstVertex?: GPUSize32,
    firstInstance?: GPUSize32
  ): undefined;
  drawIndexed(
    indexCount: GPUSize32,
    instanceCount?: GPUSize32,
    firstIndex?: GPUSize32,
    baseVertex?: GPUSignedOffset32,
    firstInstance?: GPUSize32
  ): undefined;
  drawIndirect(
    indirectBuffer: GPUBuffer,
    indirectOffset: GPUSize64
  ): undefined;
  drawIndexedIndirect(
    indirectBuffer: GPUBuffer,
    indirectOffset: GPUSize64
  ): undefined;
}

interface NavigatorGPU {
  readonly gpu: GPU;
}

interface GPU {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPU";
  /**
   * Requests an adapter from the user agent.
   * The user agent chooses whether to return an adapter, and, if so,
   * chooses according to the provided options.
   * @param options - Criteria used to select the adapter.
   */
  requestAdapter(
    options?: GPURequestAdapterOptions
  ): Promise<GPUAdapter | null>;
  /**
   * Returns an optimal {@link GPUTextureFormat} for displaying 8-bit depth, standard dynamic range
   * content on this system. Must only return {@link GPUTextureFormat#"rgba8unorm"} or
   * {@link GPUTextureFormat#"bgra8unorm"}.
   * The returned value can be passed as the {@link GPUCanvasConfiguration#format} to
   * {@link GPUCanvasContext#configure} calls on a {@link GPUCanvasContext} to ensure the associated
   * canvas is able to display its contents efficiently.
   * Note: Canvases which are not displayed to the screen may or may not benefit from using this
   * format.
   */
  getPreferredCanvasFormat(): GPUTextureFormat;
  readonly wgslLanguageFeatures: WGSLLanguageFeatures;
}

declare var GPU: {
  prototype: GPU;
};

interface GPUAdapter {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUAdapter";
  /**
   * The set of values in `this`.{@link GPUAdapter#[[adapter]]}.{@link adapter#[[features]]}.
   */
  readonly features: GPUSupportedFeatures;
  /**
   * The limits in `this`.{@link GPUAdapter#[[adapter]]}.{@link adapter#[[limits]]}.
   */
  readonly limits: GPUSupportedLimits;
  /**
   * Returns the value of {@link GPUAdapter#[[adapter]]}.{@link adapter#[[fallback]]}.
   */
  readonly isFallbackAdapter: boolean;
  /**
   * Requests a device from the adapter.
   * This is a one-time action: if a device is returned successfully,
   * the adapter becomes invalid.
   * @param descriptor - Description of the {@link GPUDevice} to request.
   */
  requestDevice(
    descriptor?: GPUDeviceDescriptor
  ): Promise<GPUDevice>;
  /**
   * Requests the {@link GPUAdapterInfo} for this {@link GPUAdapter}.
   * Note: Adapter info values are returned with a Promise to give user agents an
   * opportunity to perform potentially long-running checks when requesting unmasked values,
   * such as asking for user consent before returning. If no `unmaskHints` are specified,
   * however, no dialogs should be displayed to the user.
   * @param unmaskHints - A list of {@link GPUAdapterInfo} attribute names for which unmasked
   * 	values are desired if available.
   */
  requestAdapterInfo(
    unmaskHints?: Array<string>
  ): Promise<GPUAdapterInfo>;
}

declare var GPUAdapter: {
  prototype: GPUAdapter;
};

interface GPUAdapterInfo {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUAdapterInfo";
  /**
   * The name of the vendor of the adapter, if available. Empty string otherwise.
   */
  readonly vendor: string;
  /**
   * The name of the family or class of GPUs the adapter belongs to, if available. Empty
   * string otherwise.
   */
  readonly architecture: string;
  /**
   * A vendor-specific identifier for the adapter, if available. Empty string otherwise.
   * Note: This is a value that represents the type of adapter. For example, it may be a
   * [PCI device ID](https://pcisig.com/). It does not uniquely identify a given piece of
   * hardware like a serial number.
   */
  readonly device: string;
  /**
   * A human readable string describing the adapter as reported by the driver, if available.
   * Empty string otherwise.
   * Note: Because no formatting is applied to {@link GPUAdapterInfo#description} attempting to parse
   * this value is not recommended. Applications which change their behavior based on the
   * {@link GPUAdapterInfo}, such as applying workarounds for known driver issues, should rely on the
   * other fields when possible.
   */
  readonly description: string;
}

declare var GPUAdapterInfo: {
  prototype: GPUAdapterInfo;
};

interface GPUBindGroup
  extends GPUObjectBase {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUBindGroup";
}

declare var GPUBindGroup: {
  prototype: GPUBindGroup;
};

interface GPUBindGroupLayout
  extends GPUObjectBase {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUBindGroupLayout";
}

declare var GPUBindGroupLayout: {
  prototype: GPUBindGroupLayout;
};

interface GPUBuffer
  extends GPUObjectBase {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUBuffer";
  readonly size: GPUSize64;
  readonly usage: GPUBufferUsageFlags;
  readonly mapState: GPUBufferMapState;
  /**
   * Maps the given range of the {@link GPUBuffer} and resolves the returned {@link Promise} when the
   * {@link GPUBuffer}'s content is ready to be accessed with {@link GPUBuffer#getMappedRange}.
   * The resolution of the returned {@link Promise} **only** indicates that the buffer has been mapped.
   * It does not guarantee the completion of any other operations visible to the content timeline,
   * and in particular does not imply that any other {@link Promise} returned from
   * {@link GPUQueue#onSubmittedWorkDone()} or {@link GPUBuffer#mapAsync} on other {@link GPUBuffer}s
   * have resolved.
   * The resolution of the {@link Promise} returned from {@link GPUQueue#onSubmittedWorkDone}
   * **does** imply the completion of
   * {@link GPUBuffer#mapAsync} calls made prior to that call,
   * on {@link GPUBuffer}s last used exclusively on that queue.
   * @param mode - Whether the buffer should be mapped for reading or writing.
   * @param offset - Offset in bytes into the buffer to the start of the range to map.
   * @param size - Size in bytes of the range to map.
   */
  mapAsync(
    mode: GPUMapModeFlags,
    offset?: GPUSize64,
    size?: GPUSize64
  ): Promise<undefined>;
  /**
   * Returns an {@link ArrayBuffer} with the contents of the {@link GPUBuffer} in the given mapped range.
   * @param offset - Offset in bytes into the buffer to return buffer contents from.
   * @param size - Size in bytes of the {@link ArrayBuffer} to return.
   */
  getMappedRange(
    offset?: GPUSize64,
    size?: GPUSize64
  ): ArrayBuffer;
  /**
   * Unmaps the mapped range of the {@link GPUBuffer} and makes it's contents available for use by the
   * GPU again.
   */
  unmap(): undefined;
  /**
   * Destroys the {@link GPUBuffer}.
   * Note: It is valid to destroy a buffer multiple times.
   * Note: Since no further operations can be enqueued using this buffer, implementations can
   * free resource allocations, including mapped memory that was just unmapped.
   */
  destroy(): undefined;
}

declare var GPUBuffer: {
  prototype: GPUBuffer;
};

interface GPUCanvasContext {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUCanvasContext";
  /**
   * The canvas this context was created from.
   */
  readonly canvas:
    | HTMLCanvasElement
    | OffscreenCanvas;
  /**
   * Configures the context for this canvas.
   * This clears the drawing buffer to transparent black (in [$Replace the drawing buffer$]).
   * @param configuration - Desired configuration for the context.
   */
  configure(
    configuration: GPUCanvasConfiguration
  ): undefined;
  /**
   * Removes the context configuration. Destroys any textures produced while configured.
   */
  unconfigure(): undefined;
  /**
   * Get the {@link GPUTexture} that will be composited to the document by the {@link GPUCanvasContext}
   * next.
   * Note: The same {@link GPUTexture} object will be returned by every
   * call to {@link GPUCanvasContext#getCurrentTexture} until "[$Expire the current texture$]"
   * runs, even if that {@link GPUTexture} is destroyed, failed validation, or failed to allocate.
   */
  getCurrentTexture(): GPUTexture;
}

declare var GPUCanvasContext: {
  prototype: GPUCanvasContext;
};

interface GPUCommandBuffer
  extends GPUObjectBase {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUCommandBuffer";
}

declare var GPUCommandBuffer: {
  prototype: GPUCommandBuffer;
};

interface GPUCommandEncoder
  extends GPUObjectBase,
    GPUCommandsMixin,
    GPUDebugCommandsMixin {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUCommandEncoder";
  /**
   * Begins encoding a render pass described by `descriptor`.
   * @param descriptor - Description of the {@link GPURenderPassEncoder} to create.
   */
  beginRenderPass(
    descriptor: GPURenderPassDescriptor
  ): GPURenderPassEncoder;
  /**
   * Begins encoding a compute pass described by `descriptor`.
   * 	descriptor:
   */
  beginComputePass(
    descriptor?: GPUComputePassDescriptor
  ): GPUComputePassEncoder;
  /**
   * Encode a command into the {@link GPUCommandEncoder} that copies data from a sub-region of a
   * {@link GPUBuffer} to a sub-region of another {@link GPUBuffer}.
   * @param source - The {@link GPUBuffer} to copy from.
   * @param sourceOffset - Offset in bytes into `source` to begin copying from.
   * @param destination - The {@link GPUBuffer} to copy to.
   * @param destinationOffset - Offset in bytes into `destination` to place the copied data.
   * @param size - Bytes to copy.
   */
  copyBufferToBuffer(
    source: GPUBuffer,
    sourceOffset: GPUSize64,
    destination: GPUBuffer,
    destinationOffset: GPUSize64,
    size: GPUSize64
  ): undefined;
  /**
   * Encode a command into the {@link GPUCommandEncoder} that copies data from a sub-region of a
   * {@link GPUBuffer} to a sub-region of one or multiple continuous texture subresources.
   * @param source - Combined with `copySize`, defines the region of the source buffer.
   * @param destination - Combined with `copySize`, defines the region of the destination texture subresource.
   * 	`copySize`:
   */
  copyBufferToTexture(
    source: GPUImageCopyBuffer,
    destination: GPUImageCopyTexture,
    copySize: GPUExtent3D
  ): undefined;
  /**
   * Encode a command into the {@link GPUCommandEncoder} that copies data from a sub-region of one or
   * multiple continuous texture subresourcesto a sub-region of a {@link GPUBuffer}.
   * @param source - Combined with `copySize`, defines the region of the source texture subresources.
   * @param destination - Combined with `copySize`, defines the region of the destination buffer.
   * 	`copySize`:
   */
  copyTextureToBuffer(
    source: GPUImageCopyTexture,
    destination: GPUImageCopyBuffer,
    copySize: GPUExtent3D
  ): undefined;
  /**
   * Encode a command into the {@link GPUCommandEncoder} that copies data from a sub-region of one
   * or multiple contiguous texture subresources to another sub-region of one or
   * multiple continuous texture subresources.
   * @param source - Combined with `copySize`, defines the region of the source texture subresources.
   * @param destination - Combined with `copySize`, defines the region of the destination texture subresources.
   * 	`copySize`:
   */
  copyTextureToTexture(
    source: GPUImageCopyTexture,
    destination: GPUImageCopyTexture,
    copySize: GPUExtent3D
  ): undefined;
  /**
   * Encode a command into the {@link GPUCommandEncoder} that fills a sub-region of a
   * {@link GPUBuffer} with zeros.
   * @param buffer - The {@link GPUBuffer} to clear.
   * @param offset - Offset in bytes into `buffer` where the sub-region to clear begins.
   * @param size - Size in bytes of the sub-region to clear. Defaults to the size of the buffer minus `offset`.
   */
  clearBuffer(
    buffer: GPUBuffer,
    offset?: GPUSize64,
    size?: GPUSize64
  ): undefined;
  /**
   * Writes a timestamp value into a querySet when all previous commands have completed executing.
   * @param querySet - The query set that will store the timestamp values.
   * @param queryIndex - The index of the query in the query set.
   */
  writeTimestamp(
    querySet: GPUQuerySet,
    queryIndex: GPUSize32
  ): undefined;
  /**
   * Resolves query results from a {@link GPUQuerySet} out into a range of a {@link GPUBuffer}.
   * 	querySet:
   * 	firstQuery:
   * 	queryCount:
   * 	destination:
   * 	destinationOffset:
   */
  resolveQuerySet(
    querySet: GPUQuerySet,
    firstQuery: GPUSize32,
    queryCount: GPUSize32,
    destination: GPUBuffer,
    destinationOffset: GPUSize64
  ): undefined;
  /**
   * Completes recording of the commands sequence and returns a corresponding {@link GPUCommandBuffer}.
   * 	descriptor:
   */
  finish(
    descriptor?: GPUCommandBufferDescriptor
  ): GPUCommandBuffer;
}

declare var GPUCommandEncoder: {
  prototype: GPUCommandEncoder;
};

interface GPUCompilationInfo {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUCompilationInfo";
  readonly messages: ReadonlyArray<GPUCompilationMessage>;
}

declare var GPUCompilationInfo: {
  prototype: GPUCompilationInfo;
};

interface GPUCompilationMessage {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUCompilationMessage";
  /**
   * The human-readable, localizable text for this compilation message.
   * Note: The {@link GPUCompilationMessage#message} should follow the best practices for language
   * and direction information. This includes making use of any future standards which may
   * emerge regarding the reporting of string language and direction metadata.
   * <p class="note editorial">Editorial:
   * At the time of this writing, no language/direction recommendation is available that provides
   * compatibility and consistency with legacy APIs, but when there is, adopt it formally.
   */
  readonly message: string;
  /**
   * The severity level of the message.
   * If the {@link GPUCompilationMessage#type} is {@link GPUCompilationMessageType#"error"}, it
   * corresponds to a shader-creation error.
   */
  readonly type: GPUCompilationMessageType;
  /**
   * The line number in the shader {@link GPUShaderModuleDescriptor#code} the
   * {@link GPUCompilationMessage#message} corresponds to. Value is one-based, such that a lineNum of
   * `1` indicates the first line of the shader {@link GPUShaderModuleDescriptor#code}. Lines are
   * delimited by line breaks.
   * If the {@link GPUCompilationMessage#message} corresponds to a substring this points to
   * the line on which the substring begins. Must be `0` if the {@link GPUCompilationMessage#message}
   * does not correspond to any specific point in the shader {@link GPUShaderModuleDescriptor#code}.
   */
  readonly lineNum: number;
  /**
   * The offset, in UTF-16 code units, from the beginning of line {@link GPUCompilationMessage#lineNum}
   * of the shader {@link GPUShaderModuleDescriptor#code} to the point or beginning of the substring
   * that the {@link GPUCompilationMessage#message} corresponds to. Value is one-based, such that a
   * {@link GPUCompilationMessage#linePos} of `1` indicates the first code unit of the line.
   * If {@link GPUCompilationMessage#message} corresponds to a substring this points to the
   * first UTF-16 code unit of the substring. Must be `0` if the {@link GPUCompilationMessage#message}
   * does not correspond to any specific point in the shader {@link GPUShaderModuleDescriptor#code}.
   */
  readonly linePos: number;
  /**
   * The offset from the beginning of the shader {@link GPUShaderModuleDescriptor#code} in UTF-16
   * code units to the point or beginning of the substring that {@link GPUCompilationMessage#message}
   * corresponds to. Must reference the same position as {@link GPUCompilationMessage#lineNum} and
   * {@link GPUCompilationMessage#linePos}. Must be `0` if the {@link GPUCompilationMessage#message}
   * does not correspond to any specific point in the shader {@link GPUShaderModuleDescriptor#code}.
   */
  readonly offset: number;
  /**
   * The number of UTF-16 code units in the substring that {@link GPUCompilationMessage#message}
   * corresponds to. If the message does not correspond with a substring then
   * {@link GPUCompilationMessage#length} must be 0.
   */
  readonly length: number;
}

declare var GPUCompilationMessage: {
  prototype: GPUCompilationMessage;
};

interface GPUComputePassEncoder
  extends GPUObjectBase,
    GPUCommandsMixin,
    GPUDebugCommandsMixin,
    GPUBindingCommandsMixin {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUComputePassEncoder";
  /**
   * Sets the current {@link GPUComputePipeline}.
   * @param pipeline - The compute pipeline to use for subsequent dispatch commands.
   */
  setPipeline(
    pipeline: GPUComputePipeline
  ): undefined;
  /**
   * Dispatch work to be performed with the current {@link GPUComputePipeline}.
   * See [[#computing-operations]] for the detailed specification.
   * @param workgroupCountX - X dimension of the grid of workgroups to dispatch.
   * @param workgroupCountY - Y dimension of the grid of workgroups to dispatch.
   * @param workgroupCountZ - Z dimension of the grid of workgroups to dispatch.
   */
  dispatchWorkgroups(
    workgroupCountX: GPUSize32,
    workgroupCountY?: GPUSize32,
    workgroupCountZ?: GPUSize32
  ): undefined;
  /**
   * Dispatch work to be performed with the current {@link GPUComputePipeline} using parameters read
   * from a {@link GPUBuffer}.
   * See [[#computing-operations]] for the detailed specification.
   * packed block of **three 32-bit unsigned integer values (12 bytes total)**,
   * given in the same order as the arguments for {@link GPUComputePassEncoder#dispatchWorkgroups}.
   * For example:
   * @param indirectBuffer - Buffer containing the indirect dispatch parameters.
   * @param indirectOffset - Offset in bytes into `indirectBuffer` where the dispatch data begins.
   */
  dispatchWorkgroupsIndirect(
    indirectBuffer: GPUBuffer,
    indirectOffset: GPUSize64
  ): undefined;
  /**
   * Completes recording of the compute pass commands sequence.
   */
  end(): undefined;
}

declare var GPUComputePassEncoder: {
  prototype: GPUComputePassEncoder;
};

interface GPUComputePipeline
  extends GPUObjectBase,
    GPUPipelineBase {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUComputePipeline";
}

declare var GPUComputePipeline: {
  prototype: GPUComputePipeline;
};

interface GPUDevice
  extends EventTarget,
    GPUObjectBase {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUDevice";
  /**
   * A set containing the {@link GPUFeatureName} values of the features
   * supported by the device (i.e. the ones with which it was created).
   */
  readonly features: GPUSupportedFeatures;
  /**
   * Exposes the limits supported by the device
   * (which are exactly the ones with which it was created).
   */
  readonly limits: GPUSupportedLimits;
  /**
   * The primary {@link GPUQueue} for this device.
   */
  readonly queue: GPUQueue;
  /**
   * Destroys the device, preventing further operations on it.
   * Outstanding asynchronous operations will fail.
   * Note: It is valid to destroy a device multiple times.
   */
  destroy(): undefined;
  /**
   * Creates a {@link GPUBuffer}.
   * @param descriptor - Description of the {@link GPUBuffer} to create.
   */
  createBuffer(
    descriptor: GPUBufferDescriptor
  ): GPUBuffer;
  /**
   * Creates a {@link GPUTexture}.
   * @param descriptor - Description of the {@link GPUTexture} to create.
   */
  createTexture(
    descriptor: GPUTextureDescriptor
  ): GPUTexture;
  /**
   * Creates a {@link GPUSampler}.
   * @param descriptor - Description of the {@link GPUSampler} to create.
   */
  createSampler(
    descriptor?: GPUSamplerDescriptor
  ): GPUSampler;
  /**
   * Creates a {@link GPUExternalTexture} wrapping the provided image source.
   * @param descriptor - Provides the external image source object (and any creation options).
   */
  importExternalTexture(
    descriptor: GPUExternalTextureDescriptor
  ): GPUExternalTexture;
  /**
   * Creates a {@link GPUBindGroupLayout}.
   * @param descriptor - Description of the {@link GPUBindGroupLayout} to create.
   */
  createBindGroupLayout(
    descriptor: GPUBindGroupLayoutDescriptor
  ): GPUBindGroupLayout;
  /**
   * Creates a {@link GPUPipelineLayout}.
   * @param descriptor - Description of the {@link GPUPipelineLayout} to create.
   */
  createPipelineLayout(
    descriptor: GPUPipelineLayoutDescriptor
  ): GPUPipelineLayout;
  /**
   * Creates a {@link GPUBindGroup}.
   * @param descriptor - Description of the {@link GPUBindGroup} to create.
   */
  createBindGroup(
    descriptor: GPUBindGroupDescriptor
  ): GPUBindGroup;
  /**
   * Creates a {@link GPUShaderModule}.
   * @param descriptor - Description of the {@link GPUShaderModule} to create.
   */
  createShaderModule(
    descriptor: GPUShaderModuleDescriptor
  ): GPUShaderModule;
  /**
   * Creates a {@link GPUComputePipeline} using immediate pipeline creation.
   * @param descriptor - Description of the {@link GPUComputePipeline} to create.
   */
  createComputePipeline(
    descriptor: GPUComputePipelineDescriptor
  ): GPUComputePipeline;
  /**
   * Creates a {@link GPURenderPipeline} using immediate pipeline creation.
   * @param descriptor - Description of the {@link GPURenderPipeline} to create.
   */
  createRenderPipeline(
    descriptor: GPURenderPipelineDescriptor
  ): GPURenderPipeline;
  /**
   * Creates a {@link GPUComputePipeline} using async pipeline creation.
   * The returned {@link Promise} resolves when the created pipeline
   * is ready to be used without additional delay.
   * If pipeline creation fails, the returned {@link Promise} rejects with an {@link GPUPipelineError}.
   * Note: Use of this method is preferred whenever possible, as it prevents blocking the
   * queue timeline work on pipeline compilation.
   * @param descriptor - Description of the {@link GPUComputePipeline} to create.
   */
  createComputePipelineAsync(
    descriptor: GPUComputePipelineDescriptor
  ): Promise<GPUComputePipeline>;
  /**
   * Creates a {@link GPURenderPipeline} using async pipeline creation.
   * The returned {@link Promise} resolves when the created pipeline
   * is ready to be used without additional delay.
   * If pipeline creation fails, the returned {@link Promise} rejects with an {@link GPUPipelineError}.
   * Note: Use of this method is preferred whenever possible, as it prevents blocking the
   * queue timeline work on pipeline compilation.
   * @param descriptor - Description of the {@link GPURenderPipeline} to create.
   */
  createRenderPipelineAsync(
    descriptor: GPURenderPipelineDescriptor
  ): Promise<GPURenderPipeline>;
  /**
   * Creates a {@link GPUCommandEncoder}.
   * @param descriptor - Description of the {@link GPUCommandEncoder} to create.
   */
  createCommandEncoder(
    descriptor?: GPUCommandEncoderDescriptor
  ): GPUCommandEncoder;
  /**
   * Creates a {@link GPURenderBundleEncoder}.
   * @param descriptor - Description of the {@link GPURenderBundleEncoder} to create.
   */
  createRenderBundleEncoder(
    descriptor: GPURenderBundleEncoderDescriptor
  ): GPURenderBundleEncoder;
  /**
   * Creates a {@link GPUQuerySet}.
   * @param descriptor - Description of the {@link GPUQuerySet} to create.
   */
  createQuerySet(
    descriptor: GPUQuerySetDescriptor
  ): GPUQuerySet;
  /**
   * A slot-backed attribute holding a promise which is created with the device, remains
   * pending for the lifetime of the device, then resolves when the device is lost.
   * Upon initialization, it is set to a new promise.
   */
  readonly lost: Promise<GPUDeviceLostInfo>;
  /**
   * Pushes a new GPU error scope onto the {@link GPUDevice#[[errorScopeStack]]} for `this`.
   * @param filter - Which class of errors this error scope observes.
   */
  pushErrorScope(
    filter: GPUErrorFilter
  ): undefined;
  /**
   * Pops a GPU error scope off the {@link GPUDevice#[[errorScopeStack]]} for `this`
   * and resolves to **any** {@link GPUError} observed by the error scope, or `null` if none.
   * There is no guarantee of the ordering of promise resolution.
   */
  popErrorScope(): Promise<GPUError | null>;
  /**
   * An event handler IDL attribute for the {@link GPUDevice#uncapturederror} event type.
   */
  onuncapturederror: EventHandler;
}

declare var GPUDevice: {
  prototype: GPUDevice;
};

interface GPUDeviceLostInfo {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUDeviceLostInfo";
  readonly reason: GPUDeviceLostReason;
  readonly message: string;
}

declare var GPUDeviceLostInfo: {
  prototype: GPUDeviceLostInfo;
};

interface GPUError {
  /**
   * A human-readable, localizable text message providing information about the error that
   * occurred.
   * Note: This message is generally intended for application developers to debug their
   * applications and capture information for debug reports, not to be surfaced to end-users.
   * Note: User agents should not include potentially machine-parsable details in this message,
   * such as free system memory on {@link GPUErrorFilter#"out-of-memory"} or other details about the
   * conditions under which memory was exhausted.
   * Note: The {@link GPUError#message} should follow the best practices for language and
   * direction information. This includes making use of any future standards which may emerge
   * regarding the reporting of string language and direction metadata.
   * <p class="note editorial">Editorial:
   * At the time of this writing, no language/direction recommendation is available that provides
   * compatibility and consistency with legacy APIs, but when there is, adopt it formally.
   */
  readonly message: string;
}

declare var GPUError: {
  prototype: GPUError;
};

interface GPUExternalTexture
  extends GPUObjectBase {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUExternalTexture";
}

declare var GPUExternalTexture: {
  prototype: GPUExternalTexture;
};

interface GPUInternalError
  extends GPUError {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUInternalError";
}

declare var GPUInternalError: {
  prototype: GPUInternalError;
  new (
    message: string
  );
};

interface GPUOutOfMemoryError
  extends GPUError {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUOutOfMemoryError";
}

declare var GPUOutOfMemoryError: {
  prototype: GPUOutOfMemoryError;
  new (
    message: string
  );
};

interface GPUPipelineError
  extends DOMException {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUPipelineError";
  /**
   * A read-only slot-backed attribute exposing the type of error encountered in pipeline creation
   * as a <dfn enum for="">GPUPipelineErrorReason</dfn>:
   * <ul dfn-type=enum-value dfn-for=GPUPipelineErrorReason>
   * - <dfn>"validation"</dfn>: A [$validation error$].
   * - <dfn>"internal"</dfn>: An [$internal error$].
   * </ul>
   */
  readonly reason: GPUPipelineErrorReason;
}

declare var GPUPipelineError: {
  prototype: GPUPipelineError;
  new (
    message:
      | string
      | undefined,
    options: GPUPipelineErrorInit
  );
};

interface GPUPipelineLayout
  extends GPUObjectBase {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUPipelineLayout";
}

declare var GPUPipelineLayout: {
  prototype: GPUPipelineLayout;
};

interface GPUQuerySet
  extends GPUObjectBase {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUQuerySet";
  /**
   * Destroys the {@link GPUQuerySet}.
   */
  destroy(): undefined;
  /**
   * The type of the queries managed by this {@link GPUQuerySet}.
   */
  readonly type: GPUQueryType;
  /**
   * The number of queries managed by this {@link GPUQuerySet}.
   */
  readonly count: GPUSize32;
}

declare var GPUQuerySet: {
  prototype: GPUQuerySet;
};

interface GPUQueue
  extends GPUObjectBase {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUQueue";
  /**
   * Schedules the execution of the command buffers by the GPU on this queue.
   * Submitted command buffers cannot be used again.
   * 	`commandBuffers`:
   */
  submit(
    commandBuffers: Array<GPUCommandBuffer>
  ): undefined;
  onSubmittedWorkDone(): Promise<undefined>;
  /**
   * Issues a write operation of the provided data into a {@link GPUBuffer}.
   * @param buffer - The buffer to write to.
   * @param bufferOffset - Offset in bytes into `buffer` to begin writing at.
   * @param data - Data to write into `buffer`.
   * @param dataOffset - Offset in into `data` to begin writing from. Given in elements if
   * 	`data` is a `TypedArray` and bytes otherwise.
   * @param size - Size of content to write from `data` to `buffer`. Given in elements if
   * 	`data` is a `TypedArray` and bytes otherwise.
   */
  writeBuffer(
    buffer: GPUBuffer,
    bufferOffset: GPUSize64,
    data: BufferSource,
    dataOffset?: GPUSize64,
    size?: GPUSize64
  ): undefined;
  /**
   * Issues a write operation of the provided data into a {@link GPUTexture}.
   * @param destination - The texture subresource and origin to write to.
   * @param data - Data to write into `destination`.
   * @param dataLayout - Layout of the content in `data`.
   * @param size - Extents of the content to write from `data` to `destination`.
   */
  writeTexture(
    destination: GPUImageCopyTexture,
    data: BufferSource,
    dataLayout: GPUImageDataLayout,
    size: GPUExtent3D
  ): undefined;
  /**
   * Issues a copy operation of the contents of a platform image/canvas
   * into the destination texture.
   * This operation performs [[#color-space-conversions|color encoding]] into the destination
   * encoding according to the parameters of {@link GPUImageCopyTextureTagged}.
   * Copying into a `-srgb` texture results in the same texture bytes, not the same decoded
   * values, as copying into the corresponding non-`-srgb` format.
   * Thus, after a copy operation, sampling the destination texture has
   * different results depending on whether its format is `-srgb`, all else unchanged.
   * <!-- POSTV1(srgb-linear): If added, explain here how it interacts. -->
   * @param source - source image and origin to copy to `destination`.
   * @param destination - The texture subresource and origin to write to, and its encoding metadata.
   * @param copySize - Extents of the content to write from `source` to `destination`.
   */
  copyExternalImageToTexture(
    source: GPUImageCopyExternalImage,
    destination: GPUImageCopyTextureTagged,
    copySize: GPUExtent3D
  ): undefined;
}

declare var GPUQueue: {
  prototype: GPUQueue;
};

interface GPURenderBundle
  extends GPUObjectBase {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPURenderBundle";
}

declare var GPURenderBundle: {
  prototype: GPURenderBundle;
};

interface GPURenderBundleEncoder
  extends GPUObjectBase,
    GPUCommandsMixin,
    GPUDebugCommandsMixin,
    GPUBindingCommandsMixin,
    GPURenderCommandsMixin {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPURenderBundleEncoder";
  /**
   * Completes recording of the render bundle commands sequence.
   * 	descriptor:
   */
  finish(
    descriptor?: GPURenderBundleDescriptor
  ): GPURenderBundle;
}

declare var GPURenderBundleEncoder: {
  prototype: GPURenderBundleEncoder;
};

interface GPURenderPassEncoder
  extends GPUObjectBase,
    GPUCommandsMixin,
    GPUDebugCommandsMixin,
    GPUBindingCommandsMixin,
    GPURenderCommandsMixin {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPURenderPassEncoder";
  /**
   * Sets the viewport used during the rasterization stage to linearly map from normalized device
   * coordinates to viewport coordinates.
   * @param x - Minimum X value of the viewport in pixels.
   * @param y - Minimum Y value of the viewport in pixels.
   * @param width - Width of the viewport in pixels.
   * @param height - Height of the viewport in pixels.
   * @param minDepth - Minimum depth value of the viewport.
   * @param maxDepth - Maximum depth value of the viewport.
   */
  setViewport(
    x: number,
    y: number,
    width: number,
    height: number,
    minDepth: number,
    maxDepth: number
  ): undefined;
  /**
   * Sets the scissor rectangle used during the rasterization stage.
   * After transformation into viewport coordinates any fragments which fall outside the scissor
   * rectangle will be discarded.
   * @param x - Minimum X value of the scissor rectangle in pixels.
   * @param y - Minimum Y value of the scissor rectangle in pixels.
   * @param width - Width of the scissor rectangle in pixels.
   * @param height - Height of the scissor rectangle in pixels.
   */
  setScissorRect(
    x: GPUIntegerCoordinate,
    y: GPUIntegerCoordinate,
    width: GPUIntegerCoordinate,
    height: GPUIntegerCoordinate
  ): undefined;
  /**
   * Sets the constant blend color and alpha values used with {@link GPUBlendFactor#"constant"}
   * and {@link GPUBlendFactor#"one-minus-constant"} {@link GPUBlendFactor}s.
   * @param color - The color to use when blending.
   */
  setBlendConstant(
    color: GPUColor
  ): undefined;
  /**
   * Sets the {@link RenderState#[[stencilReference]]} value used during stencil tests with
   * the {@link GPUStencilOperation#"replace"} {@link GPUStencilOperation}.
   * @param reference - The new stencil reference value.
   */
  setStencilReference(
    reference: GPUStencilValue
  ): undefined;
  /**
   * @param queryIndex - The index of the query in the query set.
   */
  beginOcclusionQuery(
    queryIndex: GPUSize32
  ): undefined;
  /**
   */
  endOcclusionQuery(): undefined;
  /**
   * Executes the commands previously recorded into the given {@link GPURenderBundle}s as part of
   * this render pass.
   * When a {@link GPURenderBundle} is executed, it does not inherit the render pass's pipeline, bind
   * groups, or vertex and index buffers. After a {@link GPURenderBundle} has executed, the render
   * pass's pipeline, bind group, and vertex/index buffer state is cleared
   * (to the initial, empty values).
   * Note: The state is cleared, not restored to the previous state.
   * This occurs even if zero {@link GPURenderBundle|GPURenderBundles} are executed.
   * @param bundles - List of render bundles to execute.
   */
  executeBundles(
    bundles: Array<GPURenderBundle>
  ): undefined;
  /**
   * Completes recording of the render pass commands sequence.
   */
  end(): undefined;
}

declare var GPURenderPassEncoder: {
  prototype: GPURenderPassEncoder;
};

interface GPURenderPipeline
  extends GPUObjectBase,
    GPUPipelineBase {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPURenderPipeline";
}

declare var GPURenderPipeline: {
  prototype: GPURenderPipeline;
};

interface GPUSampler
  extends GPUObjectBase {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUSampler";
}

declare var GPUSampler: {
  prototype: GPUSampler;
};

interface GPUShaderModule
  extends GPUObjectBase {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUShaderModule";
  /**
   * Returns any messages generated during the {@link GPUShaderModule}'s compilation.
   * The locations, order, and contents of messages are implementation-defined.
   * In particular, messages may not be ordered by {@link GPUCompilationMessage#lineNum}.
   */
  getCompilationInfo(): Promise<GPUCompilationInfo>;
}

declare var GPUShaderModule: {
  prototype: GPUShaderModule;
};

type GPUSupportedFeatures =
  ReadonlySet<string>;

interface GPUSupportedLimits {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUSupportedLimits";
  readonly maxTextureDimension1D: number;
  readonly maxTextureDimension2D: number;
  readonly maxTextureDimension3D: number;
  readonly maxTextureArrayLayers: number;
  readonly maxBindGroups: number;
  readonly maxBindGroupsPlusVertexBuffers: number;
  readonly maxBindingsPerBindGroup: number;
  readonly maxDynamicUniformBuffersPerPipelineLayout: number;
  readonly maxDynamicStorageBuffersPerPipelineLayout: number;
  readonly maxSampledTexturesPerShaderStage: number;
  readonly maxSamplersPerShaderStage: number;
  readonly maxStorageBuffersPerShaderStage: number;
  readonly maxStorageTexturesPerShaderStage: number;
  readonly maxUniformBuffersPerShaderStage: number;
  readonly maxUniformBufferBindingSize: number;
  readonly maxStorageBufferBindingSize: number;
  readonly minUniformBufferOffsetAlignment: number;
  readonly minStorageBufferOffsetAlignment: number;
  readonly maxVertexBuffers: number;
  readonly maxBufferSize: number;
  readonly maxVertexAttributes: number;
  readonly maxVertexBufferArrayStride: number;
  readonly maxInterStageShaderComponents: number;
  readonly maxInterStageShaderVariables: number;
  readonly maxColorAttachments: number;
  readonly maxColorAttachmentBytesPerSample: number;
  readonly maxComputeWorkgroupStorageSize: number;
  readonly maxComputeInvocationsPerWorkgroup: number;
  readonly maxComputeWorkgroupSizeX: number;
  readonly maxComputeWorkgroupSizeY: number;
  readonly maxComputeWorkgroupSizeZ: number;
  readonly maxComputeWorkgroupsPerDimension: number;
}

declare var GPUSupportedLimits: {
  prototype: GPUSupportedLimits;
};

interface GPUTexture
  extends GPUObjectBase {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUTexture";
  /**
   * Creates a {@link GPUTextureView}.
   * @param descriptor - Description of the {@link GPUTextureView} to create.
   */
  createView(
    descriptor?: GPUTextureViewDescriptor
  ): GPUTextureView;
  /**
   * Destroys the {@link GPUTexture}.
   */
  destroy(): undefined;
  /**
   * The width of this {@link GPUTexture}.
   */
  readonly width: GPUIntegerCoordinate;
  /**
   * The height of this {@link GPUTexture}.
   */
  readonly height: GPUIntegerCoordinate;
  /**
   * The depth or layer count of this {@link GPUTexture}.
   */
  readonly depthOrArrayLayers: GPUIntegerCoordinate;
  /**
   * The number of mip levels of this {@link GPUTexture}.
   */
  readonly mipLevelCount: GPUIntegerCoordinate;
  /**
   * The number of sample count of this {@link GPUTexture}.
   */
  readonly sampleCount: GPUSize32;
  /**
   * The dimension of the set of texel for each of this {@link GPUTexture}'s subresources.
   */
  readonly dimension: GPUTextureDimension;
  /**
   * The format of this {@link GPUTexture}.
   */
  readonly format: GPUTextureFormat;
  /**
   * The allowed usages for this {@link GPUTexture}.
   */
  readonly usage: GPUTextureUsageFlags;
}

declare var GPUTexture: {
  prototype: GPUTexture;
};

interface GPUTextureView
  extends GPUObjectBase {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUTextureView";
}

declare var GPUTextureView: {
  prototype: GPUTextureView;
};

interface GPUUncapturedErrorEvent
  extends Event {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUUncapturedErrorEvent";
  /**
   * A slot-backed attribute holding an object representing the error that was uncaptured.
   * This has the same type as errors returned by {@link GPUDevice#popErrorScope}.
   */
  readonly error: GPUError;
}

declare var GPUUncapturedErrorEvent: {
  prototype: GPUUncapturedErrorEvent;
  new (
    type: string,
    gpuUncapturedErrorEventInitDict: GPUUncapturedErrorEventInit
  );
};

interface GPUValidationError
  extends GPUError {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUValidationError";
}

declare var GPUValidationError: {
  prototype: GPUValidationError;
  new (
    message: string
  );
};

type WGSLLanguageFeatures =
  ReadonlySet<string>;

interface Navigator
  extends NavigatorGPU {}

interface WorkerNavigator
  extends NavigatorGPU {}

interface GPUBufferUsage {
  readonly MAP_READ: GPUFlagsConstant;
  readonly MAP_WRITE: GPUFlagsConstant;
  readonly COPY_SRC: GPUFlagsConstant;
  readonly COPY_DST: GPUFlagsConstant;
  readonly INDEX: GPUFlagsConstant;
  readonly VERTEX: GPUFlagsConstant;
  readonly UNIFORM: GPUFlagsConstant;
  readonly STORAGE: GPUFlagsConstant;
  readonly INDIRECT: GPUFlagsConstant;
  readonly QUERY_RESOLVE: GPUFlagsConstant;
}

interface GPUColorWrite {
  readonly RED: GPUFlagsConstant;
  readonly GREEN: GPUFlagsConstant;
  readonly BLUE: GPUFlagsConstant;
  readonly ALPHA: GPUFlagsConstant;
  readonly ALL: GPUFlagsConstant;
}

interface GPUMapMode {
  readonly READ: GPUFlagsConstant;
  readonly WRITE: GPUFlagsConstant;
}

interface GPUShaderStage {
  readonly VERTEX: GPUFlagsConstant;
  readonly FRAGMENT: GPUFlagsConstant;
  readonly COMPUTE: GPUFlagsConstant;
}

interface GPUTextureUsage {
  readonly COPY_SRC: GPUFlagsConstant;
  readonly COPY_DST: GPUFlagsConstant;
  readonly TEXTURE_BINDING: GPUFlagsConstant;
  readonly STORAGE_BINDING: GPUFlagsConstant;
  readonly RENDER_ATTACHMENT: GPUFlagsConstant;
}
