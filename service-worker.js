/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5f48bab9094dfe0cc3d4904f7e436420"
  },
  {
    "url": "assets/css/0.styles.0ce263ec.css",
    "revision": "bb8051f29569d707c129b33e23f072f9"
  },
  {
    "url": "assets/fonts/MathJax_AMS-Regular.07173fb7.woff",
    "revision": "07173fb77d2ee655811499d40c8388e7"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Bold.bc421258.woff",
    "revision": "bc42125861bd5bfc8686deeb612dcbb3"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Regular.b80e08d5.woff",
    "revision": "b80e08d5a79acbd1fafb1ca6f3515664"
  },
  {
    "url": "assets/fonts/MathJax_Main-Bold.c9423d5d.woff",
    "revision": "c9423d5dc9d82a38ca215f74e9cdd9f2"
  },
  {
    "url": "assets/fonts/MathJax_Main-Italic.7e83626b.woff",
    "revision": "7e83626ba8bf2d20dc41565f1e6d0afc"
  },
  {
    "url": "assets/fonts/MathJax_Main-Regular.9995de47.woff",
    "revision": "9995de4787f908d8237dba7007f6c3fe"
  },
  {
    "url": "assets/fonts/MathJax_Math-BoldItalic.77dbcee3.woff",
    "revision": "77dbcee3c3d9a82a0c04a4ae7992b895"
  },
  {
    "url": "assets/fonts/MathJax_Math-Italic.5589d1a8.woff",
    "revision": "5589d1a8fc62be6613020ef2fa13e410"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Bold.07281897.woff",
    "revision": "07281897a98a61c3733e1670f82a9fd5"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Italic.3d580bd5.woff",
    "revision": "3d580bd561716bfb1f0b4fdd7063a802"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Regular.bc3af04f.woff",
    "revision": "bc3af04f9a671fcabd6498042c57478f"
  },
  {
    "url": "assets/fonts/MathJax_Script-Regular.4c74e33b.woff",
    "revision": "4c74e33b0feb1fdbda49403a5e7ed604"
  },
  {
    "url": "assets/fonts/MathJax_Typewriter-Regular.72815766.woff",
    "revision": "72815766b08ca24d4d29ad1f5d4ecb45"
  },
  {
    "url": "assets/img/2-1_selector.383bfbb0.jpeg",
    "revision": "383bfbb085c1eeb9b9473ae6f18e97a0"
  },
  {
    "url": "assets/img/8_bit_adder.68cd3891.jpeg",
    "revision": "68cd38910f526c149d232720b82b6ca1"
  },
  {
    "url": "assets/img/address_space_layout_randomization.dbda1bd1.jpeg",
    "revision": "dbda1bd1d43d6fa9d7b552ca57d223b9"
  },
  {
    "url": "assets/img/arp_protocol.6e6dab0f.png",
    "revision": "6e6dab0fff2514677894612462c709ce"
  },
  {
    "url": "assets/img/base_addressing.ce56778e.png",
    "revision": "ce56778ebc9881d1c9db45c44ec6d301"
  },
  {
    "url": "assets/img/BCD_encoding.f5a0b0f2.jpg",
    "revision": "f5a0b0f2188ebe0d18f4424578a588b3"
  },
  {
    "url": "assets/img/branch_prediction.ea82f279.jpeg",
    "revision": "ea82f279b48c10ad95027c91ed62ab5d"
  },
  {
    "url": "assets/img/brash_motor.78e5d626.png",
    "revision": "78e5d626f0a9e18a5fd2434b712edb98"
  },
  {
    "url": "assets/img/brashless_motor.850d54bc.png",
    "revision": "850d54bc1f29f5bb3db7ee53d23803bd"
  },
  {
    "url": "assets/img/cache_coherence.a6146ddd.jpeg",
    "revision": "a6146ddd5c78f2cbc1af56b0ee3292da"
  },
  {
    "url": "assets/img/cache_system.0bb68b0b.png",
    "revision": "0bb68b0bcda593888a0cc797d1735ab5"
  },
  {
    "url": "assets/img/charset_encoding.9911c58d.jpg",
    "revision": "9911c58d79e8a1f106d48a83457d193e"
  },
  {
    "url": "assets/img/cisc_risc.d69a1e75.jpeg",
    "revision": "d69a1e753fa1523df054573f13516277"
  },
  {
    "url": "assets/img/cpu_core_system.99c3127b.png",
    "revision": "99c3127b152a0c83c8c03f4ac719558a"
  },
  {
    "url": "assets/img/CPU_pipeline_overhead.d9e141af.jpeg",
    "revision": "d9e141af3f2c5eedd5aed438388cfe26"
  },
  {
    "url": "assets/img/CPU_pipeline.1e880fa8.jpeg",
    "revision": "1e880fa8b1eab511583267e68f0541ad"
  },
  {
    "url": "assets/img/cpu_registers.cdba5c17.jpg",
    "revision": "cdba5c17a04f0dd5ef05b70368b9a96f"
  },
  {
    "url": "assets/img/csr_register_access_instruction.20cc4af2.png",
    "revision": "20cc4af258e55224b9d6a0aedef7f112"
  },
  {
    "url": "assets/img/csr_register_encoding.43e73e84.png",
    "revision": "43e73e84f64f58165a0a87eceeda90a0"
  },
  {
    "url": "assets/img/D_flip_flop.d749acce.jpeg",
    "revision": "d749acce21756d89c35ee19545cfebbb"
  },
  {
    "url": "assets/img/decoder.4002b5f8.jpeg",
    "revision": "4002b5f8f60a913e655d5268348ee201"
  },
  {
    "url": "assets/img/direct_mapped_cache.522eade5.png",
    "revision": "522eade51bbfad19fd25eb4f3ce80f22"
  },
  {
    "url": "assets/img/dma_chain.5fca630d.png",
    "revision": "5fca630de450c01698ac8265b4f53961"
  },
  {
    "url": "assets/img/dma_engine.54d9bdb7.png",
    "revision": "54d9bdb70a2295e715bd1c7546115846"
  },
  {
    "url": "assets/img/dynamic_link.8cab516a.jpeg",
    "revision": "8cab516a92fd3d7e951887808597094a"
  },
  {
    "url": "assets/img/elf_format.276a740d.jpg",
    "revision": "276a740d0eabf5f4be905fe7326d9fb3"
  },
  {
    "url": "assets/img/esp32_address_table.85ad7d78.png",
    "revision": "85ad7d785bd61aa4cb118f0043b0e85b"
  },
  {
    "url": "assets/img/esp32_external_memory.00b7148f.png",
    "revision": "00b7148f698a82bf10935863900e4886"
  },
  {
    "url": "assets/img/esp32_on_chip_address_table.24c64bff.png",
    "revision": "24c64bffb60d382f37029329d89f1aeb"
  },
  {
    "url": "assets/img/esp32_system_clock.212a5357.png",
    "revision": "212a53578bdae5d21866d16781a2a258"
  },
  {
    "url": "assets/img/esp32_system_structure.70e29ed6.png",
    "revision": "70e29ed6a527c6a0285db28bb7845464"
  },
  {
    "url": "assets/img/ethernet_frame.f4de10c4.png",
    "revision": "f4de10c483aafa9d08f8920858e828ba"
  },
  {
    "url": "assets/img/exception_class.da0117e6.jpeg",
    "revision": "da0117e669ebd2bd06c19beaf12d0da8"
  },
  {
    "url": "assets/img/exception.e8a49f09.jpeg",
    "revision": "e8a49f09d1bb50e4d42fccd14d743ad6"
  },
  {
    "url": "assets/img/float_example_result.9ace5a74.jpeg",
    "revision": "9ace5a7404d1790b03d07bd1b3cb5a27"
  },
  {
    "url": "assets/img/float_example.f9213c43.jpg",
    "revision": "f9213c43f5fa658a2192a68cd26435ae"
  },
  {
    "url": "assets/img/full_adder.3f11f278.jpg",
    "revision": "3f11f278ba8f24209a56fb3ee1ca9e2a"
  },
  {
    "url": "assets/img/gate_circuit.94194480.jpg",
    "revision": "94194480bcfd3b5366e4649ee80de4f6"
  },
  {
    "url": "assets/img/gdb_cheat_sheet.6f7e5433.png",
    "revision": "6f7e54334df820074939f6a5dbb99998"
  },
  {
    "url": "assets/img/gpio_matrix.0bccff5a.png",
    "revision": "0bccff5a741106393e63ab66db51fb45"
  },
  {
    "url": "assets/img/half_adder.5860fd8c.jpg",
    "revision": "5860fd8c4ace079b40e66b9568d2b81e"
  },
  {
    "url": "assets/img/hyper_threading.96aa1220.jpeg",
    "revision": "96aa1220ff27776f55091c55c2eddbc8"
  },
  {
    "url": "assets/img/I_instruction.88b187c9.png",
    "revision": "88b187c94e474d9f4d12bed3e8e9f8b8"
  },
  {
    "url": "assets/img/ieee_float32.914b71bf.jpg",
    "revision": "914b71bf1d85fb6ed76e1135f39b6941"
  },
  {
    "url": "assets/img/image_map.017b48c6.png",
    "revision": "017b48c6656dddd64aed21cad3813ae0"
  },
  {
    "url": "assets/img/immediate_addressing.63c65b49.png",
    "revision": "63c65b493f3567de925bf6559872fd89"
  },
  {
    "url": "assets/img/infrared_modulation_demodulation.f86ad3e6.svg",
    "revision": "f86ad3e629424c9af8a216abb58ec189"
  },
  {
    "url": "assets/img/input_signal_to_peripheral.a9b187b8.png",
    "revision": "a9b187b89174d16d18a803e0112e2183"
  },
  {
    "url": "assets/img/instruction_cycle.bde3548a.jpeg",
    "revision": "bde3548a4789ba49cab74c8c1ab02a67"
  },
  {
    "url": "assets/img/instruction_encoding.63ecd431.png",
    "revision": "63ecd4313327d872e23e5a02c040249c"
  },
  {
    "url": "assets/img/interrupt_matrix.dc37bcbd.png",
    "revision": "dc37bcbdf70db978592e05f56ee47fe8"
  },
  {
    "url": "assets/img/io_mux_pad.671514cc.png",
    "revision": "671514cc44c8b5a394fa3e3a0cced2a8"
  },
  {
    "url": "assets/img/ip_protocol.f8dade33.png",
    "revision": "f8dade3399a1b809f04f3921124d38cf"
  },
  {
    "url": "assets/img/iterator.a7ae1d2a.png",
    "revision": "a7ae1d2a4c8687e67b1f67a0c7af8e86"
  },
  {
    "url": "assets/img/knowledge_map.12bc9800.jpg",
    "revision": "12bc980053ea355a201e2b529048e2ff"
  },
  {
    "url": "assets/img/linear_regression.d67e8d49.png",
    "revision": "d67e8d496f872612aa62e02e4a2bcbaa"
  },
  {
    "url": "assets/img/linker_process.f62da9b2.jpeg",
    "revision": "f62da9b29aa53218f8907851df27f912"
  },
  {
    "url": "assets/img/logistic_regression.4ef370cc.png",
    "revision": "4ef370cc17dbcafcc7091ea024cd56ae"
  },
  {
    "url": "assets/img/lwip_api_message.6f551817.png",
    "revision": "6f55181782841bf71f3f1aa7c953d320"
  },
  {
    "url": "assets/img/lwip_arp_process_input.35e6fc48.png",
    "revision": "35e6fc48d57f6bdd06dcc3e9e7edead8"
  },
  {
    "url": "assets/img/lwip_arp_process_output.999a53be.png",
    "revision": "999a53be718cf8bb3857986a359d349b"
  },
  {
    "url": "assets/img/lwip_arp_reply.59985110.png",
    "revision": "59985110fc7d039a3cb5c11c152a145b"
  },
  {
    "url": "assets/img/lwip_arp_request.7e489783.png",
    "revision": "7e489783ce9afbf4379c3e2ff47718fe"
  },
  {
    "url": "assets/img/lwip_heap.1ac8ef3c.png",
    "revision": "1ac8ef3cd1e40f0272465b615331d63c"
  },
  {
    "url": "assets/img/lwip_icmp_protocol.a19c8c2e.jpg",
    "revision": "a19c8c2e0dfbf7b390f610bc68d0d5b5"
  },
  {
    "url": "assets/img/lwip_ip_frag.c71fe3b0.png",
    "revision": "c71fe3b02e3a1b6896a3a32eed5746bc"
  },
  {
    "url": "assets/img/lwip_ip_input.2eb1bb3b.png",
    "revision": "2eb1bb3bbef845e62bbd254be337b47d"
  },
  {
    "url": "assets/img/lwip_ip_output.a56af61e.png",
    "revision": "a56af61ee032ef9fc2aa137c5c38ead4"
  },
  {
    "url": "assets/img/lwip_memp.1fc0c568.png",
    "revision": "1fc0c56889cac9ecfdf57925e31afa22"
  },
  {
    "url": "assets/img/lwip_packet_message.217126c7.png",
    "revision": "217126c725e129b967094255902f19ba"
  },
  {
    "url": "assets/img/lwip_packets_into_core.85a67ff6.png",
    "revision": "85a67ff6553a1d80caff17436465fa64"
  },
  {
    "url": "assets/img/lwip_pbuf_free_0.f2634715.png",
    "revision": "f263471547a20caf3e0b2ec438161dc0"
  },
  {
    "url": "assets/img/lwip_pbuf_free_1.33781abf.png",
    "revision": "33781abf43d12a922ea4eb1bb2f74828"
  },
  {
    "url": "assets/img/lwip_pbuf_pool.e9801004.png",
    "revision": "e98010044b87e4e7c0ff77af5605c319"
  },
  {
    "url": "assets/img/lwip_pbuf_ram.408a7517.png",
    "revision": "408a7517eeb27554819334a236e3806b"
  },
  {
    "url": "assets/img/lwip_pbuf_rom_ref.64893f56.png",
    "revision": "64893f569acab92710ec71b82dabf036"
  },
  {
    "url": "assets/img/lwip_timeouts_list.51042adb.png",
    "revision": "51042adb1c6c886cfc3878b0bc89594a"
  },
  {
    "url": "assets/img/memory_address_to_cache_line.1313fe1e.png",
    "revision": "1313fe1e4eb3b5c949284c8b215af8d4"
  },
  {
    "url": "assets/img/memory_and_bus.32a8b406.png",
    "revision": "32a8b406d22236061fcb758336ba55b4"
  },
  {
    "url": "assets/img/memory_hierarchy.ab345017.png",
    "revision": "ab345017c3f662b15e15e97e0ca1db0a"
  },
  {
    "url": "assets/img/memory_map.6e8f8541.svg",
    "revision": "6e8f854157f68ded4cbfa11f64108ae0"
  },
  {
    "url": "assets/img/memory_paging.0cf2f08e.png",
    "revision": "0cf2f08e1ceda473df71189334857cf0"
  },
  {
    "url": "assets/img/memory_segmentation.57211af3.png",
    "revision": "57211af3053ed621aeb903433c6c10d1"
  },
  {
    "url": "assets/img/mesi.fa98835c.jpeg",
    "revision": "fa98835c78c879ab69fd1f29193e54d1"
  },
  {
    "url": "assets/img/mips_instruction.b1ade5f8.jpeg",
    "revision": "b1ade5f8de67b172bf7b4ec9f63589bf"
  },
  {
    "url": "assets/img/motor_category.cd3b7f87.png",
    "revision": "cd3b7f87a795775889c64b6404eb3f54"
  },
  {
    "url": "assets/img/multi_level_page_table.61403411.jpeg",
    "revision": "614034116a840ef565feda078d73cb76"
  },
  {
    "url": "assets/img/multiply_example.0615e5e4.jpeg",
    "revision": "0615e5e4406617ee6584adbb929f9571"
  },
  {
    "url": "assets/img/netif_list.73bfcf79.png",
    "revision": "73bfcf7938735b596ec4e2538170a853"
  },
  {
    "url": "assets/img/nonlinear_regression.f58b96b1.png",
    "revision": "f58b96b1b0e08f26bbf8838ad0957776"
  },
  {
    "url": "assets/img/OoOE.153f8d5e.jpeg",
    "revision": "153f8d5e4a4363399133e1d7d9052804"
  },
  {
    "url": "assets/img/operant_forwarding.dceadd35.jpeg",
    "revision": "dceadd35c334974d8270052b37d48c27"
  },
  {
    "url": "assets/img/output_signal_to_pad.06e891ba.png",
    "revision": "06e891bab7649f99f5a1c070de7885c6"
  },
  {
    "url": "assets/img/PC_counter.1ed21092.jpg",
    "revision": "1ed21092022057ed192a7d9aff76144c"
  },
  {
    "url": "assets/img/peripheral_clock.329fd309.png",
    "revision": "329fd3095367667745b5e01c9102bb71"
  },
  {
    "url": "assets/img/pipeline_bubble.0d762f2c.jpeg",
    "revision": "0d762f2ce532d87cfe69c7b167af9c2a"
  },
  {
    "url": "assets/img/plt_got_table.1144d3a2.jpg",
    "revision": "1144d3a2d4f3f4f87c349a93429805c8"
  },
  {
    "url": "assets/img/princeton_harvard.e7508cb4.jpeg",
    "revision": "e7508cb409d398380753b292b6df8391"
  },
  {
    "url": "assets/img/R_instruction.8cf8e62d.png",
    "revision": "8cf8e62d84306b588b822d35ae419ca9"
  },
  {
    "url": "assets/img/register_addressing.0d72c7c8.png",
    "revision": "0d72c7c824dd7ff34c8c8a9a80f6bd00"
  },
  {
    "url": "assets/img/relative_addressing.e48e0439.png",
    "revision": "e48e043961b987d94d50138b35c41972"
  },
  {
    "url": "assets/img/riscv_interrupt_enter.192ffaf5.png",
    "revision": "192ffaf579fd488994cc125262188551"
  },
  {
    "url": "assets/img/riscv_interrupt_exit.16905898.png",
    "revision": "1690589888b0ad1b65b2209433c01055"
  },
  {
    "url": "assets/img/RS_flip_flop_with_clock.9e9bc411.jpeg",
    "revision": "9e9bc411aa8c7bf2f080f306a0fb8bd8"
  },
  {
    "url": "assets/img/RS_flip_flop.dc6dcce6.jpeg",
    "revision": "dc6dcce612b2fd51939d7ec44b3fe1de"
  },
  {
    "url": "assets/img/S_B_instruction.03f4e32b.png",
    "revision": "03f4e32b326535978c7ade9c3528f2e1"
  },
  {
    "url": "assets/img/sbt_jvm_options.53a2af9f.png",
    "revision": "53a2af9fa1316b81595ea40f95af4685"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/sequent_multiply.cb809de1.jpg",
    "revision": "cb809de19088d08767279715f07482e9"
  },
  {
    "url": "assets/img/setup_lwip.c67664dc.png",
    "revision": "c67664dc461af6d603ec1bc2e3f6a661"
  },
  {
    "url": "assets/img/sigmoid_function.24758bff.png",
    "revision": "24758bffbd6a9a5d243ff226cb1e3306"
  },
  {
    "url": "assets/img/simd.48ddcd5a.jpeg",
    "revision": "48ddcd5ac345091c1be5963d5ef7d7a6"
  },
  {
    "url": "assets/img/simple_page_table.22bb7912.jpeg",
    "revision": "22bb79129f6363ac26be47b35748500f"
  },
  {
    "url": "assets/img/simplest_CPU.6863e10f.jpeg",
    "revision": "6863e10fc635791878d1ecd57618b871"
  },
  {
    "url": "assets/img/spi_signals.2ac41670.png",
    "revision": "2ac4167088ad40da2f88c372545f26b9"
  },
  {
    "url": "assets/img/sram.25c619a6.png",
    "revision": "25c619a683c161d3678c7339aa34d399"
  },
  {
    "url": "assets/img/ssd_lifecycle.966e51db.jpeg",
    "revision": "966e51db8354922b533e1db236337e81"
  },
  {
    "url": "assets/img/ssd_slc.0698c240.jpeg",
    "revision": "0698c240459faa11254932905675dba7"
  },
  {
    "url": "assets/img/ssd_structure.0eee4453.jpeg",
    "revision": "0eee44535a925825b657bcac6afb72d3"
  },
  {
    "url": "assets/img/strapping_pin.5c9a4fda.png",
    "revision": "5c9a4fda6540177c3f7f80d6862a22cc"
  },
  {
    "url": "assets/img/structure_hazard.c2a4c034.jpeg",
    "revision": "c2a4c0340cb835350ea954cdc520704e"
  },
  {
    "url": "assets/img/super_scalar.85f15ec6.jpeg",
    "revision": "85f15ec667d09fd2d368822904029b32"
  },
  {
    "url": "assets/img/tcp_ip_stack.13913b2b.png",
    "revision": "13913b2bf1552065429e62743ba0214c"
  },
  {
    "url": "assets/img/tlb.43205044.jpeg",
    "revision": "432050446f68569a37c7699cccda75d9"
  },
  {
    "url": "assets/img/two_add_instructions.94dda233.jpeg",
    "revision": "94dda2330b07c08530540ae11838c569"
  },
  {
    "url": "assets/img/U_J_instruction.76d4d585.png",
    "revision": "76d4d585bc00ff2ff7c08a5896f644b6"
  },
  {
    "url": "assets/img/Von_Neumann_architecture.76984515.jpg",
    "revision": "7698451564f41bad92e81e46e2565cad"
  },
  {
    "url": "assets/img/wear_leveling.6e78f8da.jpeg",
    "revision": "6e78f8da0320dc9b392b9d35ecf42091"
  },
  {
    "url": "assets/img/write_back.67053624.jpeg",
    "revision": "67053624d6aa2a5c27c295e1fda4890d"
  },
  {
    "url": "assets/img/write_through.8b9ad674.jpeg",
    "revision": "8b9ad674953bf36680e815247de235d3"
  },
  {
    "url": "assets/js/10.c35efe66.js",
    "revision": "7827c2408dad95800c7e0e4c69978cec"
  },
  {
    "url": "assets/js/11.ba5406aa.js",
    "revision": "5c7fb0aa7911561dffd3e793f57ba743"
  },
  {
    "url": "assets/js/12.bd1c8e69.js",
    "revision": "83a4b5db7d9eaa27f71ad43ec3a56ba2"
  },
  {
    "url": "assets/js/13.16564e9b.js",
    "revision": "25c7945f9bf7eb8dd963f4921cac2072"
  },
  {
    "url": "assets/js/14.07bd0d82.js",
    "revision": "32aadfe5e732bb4050c40d685d5b12dd"
  },
  {
    "url": "assets/js/15.bfe3f331.js",
    "revision": "1228914c0079a0feac2f451961719d49"
  },
  {
    "url": "assets/js/16.bc82ad0b.js",
    "revision": "4ac70d7b25fe53113cb15f4576308550"
  },
  {
    "url": "assets/js/17.00ea6d22.js",
    "revision": "05f93a21b2ee0b7b0a7a066122e90da8"
  },
  {
    "url": "assets/js/18.bc22a39e.js",
    "revision": "808bbe2dc62cef8b084aeed33df48769"
  },
  {
    "url": "assets/js/19.9a8aceaf.js",
    "revision": "964274e239dee0535957a7a3dd4a1add"
  },
  {
    "url": "assets/js/2.ad11708f.js",
    "revision": "c86dcbd97e16f3f2f36cbaaceb3fb56f"
  },
  {
    "url": "assets/js/20.5b6f5036.js",
    "revision": "db4042e1bb6c82c62ee50b3f0cf1a24b"
  },
  {
    "url": "assets/js/21.9f840485.js",
    "revision": "38da9a2f13c1dfdd3fc4220df4c9d468"
  },
  {
    "url": "assets/js/22.fc313da1.js",
    "revision": "37ca88589407ccd6c96ce4eda0c09a8b"
  },
  {
    "url": "assets/js/23.b4a638c2.js",
    "revision": "08dcee6a40c2d464828096448cad2304"
  },
  {
    "url": "assets/js/24.20d50955.js",
    "revision": "8f08092ef1c8c166ba5060f6ea417ca3"
  },
  {
    "url": "assets/js/25.d1248e6b.js",
    "revision": "44634485deb9e83fdad6770bb2f12422"
  },
  {
    "url": "assets/js/26.e1755483.js",
    "revision": "36664e7b41d3182bf34c6217d29fe980"
  },
  {
    "url": "assets/js/27.e60d45fe.js",
    "revision": "12f308443c2949df1b9e98960ae6ef8b"
  },
  {
    "url": "assets/js/28.3efaeef2.js",
    "revision": "60842bce52bc1ef49c4e8b3fea88380b"
  },
  {
    "url": "assets/js/29.7d360ba4.js",
    "revision": "17dca68915723bb287f29e78d32d2e70"
  },
  {
    "url": "assets/js/3.eeae3421.js",
    "revision": "86f6b1dd640d25bc42411eac0729e3f7"
  },
  {
    "url": "assets/js/30.a8599af8.js",
    "revision": "ebf4387922ea0aac877f79cc0d13a334"
  },
  {
    "url": "assets/js/31.6248fa91.js",
    "revision": "6330d857837caf2b950a700a4fbd4f7d"
  },
  {
    "url": "assets/js/32.387edcca.js",
    "revision": "0cd6770da3ccaecfc83f53446eeb06d9"
  },
  {
    "url": "assets/js/33.c3211a85.js",
    "revision": "b7ca9086e57b295c9149f34bf2e56c68"
  },
  {
    "url": "assets/js/34.217eec58.js",
    "revision": "5b5cd918a4009f5bef7bfe3c5e42af2a"
  },
  {
    "url": "assets/js/35.0bc42434.js",
    "revision": "765cf6e0ef5b6bd61a3236ac6703515c"
  },
  {
    "url": "assets/js/36.49046144.js",
    "revision": "129f32fb90075dfc16453a45db9d7c2c"
  },
  {
    "url": "assets/js/37.4716f06f.js",
    "revision": "1280fae503fb25c69ebbf3d4030afdef"
  },
  {
    "url": "assets/js/38.e0237fb8.js",
    "revision": "20bd6b11e81b14efab28294070209944"
  },
  {
    "url": "assets/js/39.94ed4d28.js",
    "revision": "151988235b4eaea9c9b08de4b87890e6"
  },
  {
    "url": "assets/js/4.c4b2a1c6.js",
    "revision": "f6d65c3733bbced97e6c0f09fcf999dd"
  },
  {
    "url": "assets/js/40.20675c4b.js",
    "revision": "c6127a30198113cfbc9f07f2f82a53ac"
  },
  {
    "url": "assets/js/41.4999c970.js",
    "revision": "13c779b32eeeaa251f4cdbacf72c65c8"
  },
  {
    "url": "assets/js/42.9f042dd1.js",
    "revision": "174a524eb88d1bd06202c85eabec151c"
  },
  {
    "url": "assets/js/43.cf50476d.js",
    "revision": "c8df30788d9040d46adda41dc4a049a8"
  },
  {
    "url": "assets/js/44.4f646426.js",
    "revision": "344a52a3e943e11519f68a0946c1f7ca"
  },
  {
    "url": "assets/js/45.864c5e66.js",
    "revision": "6f0fad02a122304b764be77e17e66e46"
  },
  {
    "url": "assets/js/46.c75be948.js",
    "revision": "15adeaf55e870cd40d36598ebd0397e0"
  },
  {
    "url": "assets/js/47.69b58f02.js",
    "revision": "2bec02446486dc0b75fd49b68a7bb897"
  },
  {
    "url": "assets/js/48.907b36af.js",
    "revision": "8f3fc16e062f512d0b00301e0a8eca0b"
  },
  {
    "url": "assets/js/49.6b475bb8.js",
    "revision": "2177a28d18da856321f6fcb14a21f9a6"
  },
  {
    "url": "assets/js/5.dff97bf2.js",
    "revision": "e25eaf06ee68844829491d4d840da0c2"
  },
  {
    "url": "assets/js/50.946352ca.js",
    "revision": "a5756c45e35456e019c7f1f65d346ad3"
  },
  {
    "url": "assets/js/51.5af7db93.js",
    "revision": "64c71a0a035b631b6755309c19e4cddc"
  },
  {
    "url": "assets/js/52.ebc03f3b.js",
    "revision": "44514f9da1966c0a356368f5f74ab727"
  },
  {
    "url": "assets/js/53.e7fcc750.js",
    "revision": "630538197ed2d81a4af7d4079175d8a3"
  },
  {
    "url": "assets/js/54.fa0949db.js",
    "revision": "5c3225742cd18ed7b5eb80c1a2fabe96"
  },
  {
    "url": "assets/js/55.36f0dbf9.js",
    "revision": "46b5c4dfdda556634f18c2d7b1fde0f2"
  },
  {
    "url": "assets/js/56.406846ef.js",
    "revision": "b6dee2bec6ea150b834de379657a8c0d"
  },
  {
    "url": "assets/js/57.a1231b65.js",
    "revision": "ff186727655f1937fe1ffc35dd575573"
  },
  {
    "url": "assets/js/58.9166d1a3.js",
    "revision": "2613c7b9e7ae9ba5ebb0ef255cb6132d"
  },
  {
    "url": "assets/js/59.3246e2d3.js",
    "revision": "54faa8ccd598fbc277860fe4718efd81"
  },
  {
    "url": "assets/js/6.99bfaec0.js",
    "revision": "5c0f485fc741da225937e956983ebe94"
  },
  {
    "url": "assets/js/60.61dca745.js",
    "revision": "3e82035773b13303101149365e041168"
  },
  {
    "url": "assets/js/61.8700f336.js",
    "revision": "13ed355a231d551704182cd32e609c2e"
  },
  {
    "url": "assets/js/62.65c95085.js",
    "revision": "7707ced2f01b7151b93d287174703dfe"
  },
  {
    "url": "assets/js/63.10e4f9e7.js",
    "revision": "a840c8d4ae6333fc1c426b9374527607"
  },
  {
    "url": "assets/js/64.ffe5d650.js",
    "revision": "1338b10b0e4912b142703241b8d85a21"
  },
  {
    "url": "assets/js/65.619ec75d.js",
    "revision": "ad1b65d88dca66ae9986c8a73941ebd1"
  },
  {
    "url": "assets/js/66.1045c9a0.js",
    "revision": "59f7a38f846ffb3ad65833488e5d247a"
  },
  {
    "url": "assets/js/67.1bd5d827.js",
    "revision": "49927c538b8e46bc382dd2f5c5e7fb22"
  },
  {
    "url": "assets/js/68.1630fc86.js",
    "revision": "87cb93ee66e80d64a0f4cccb82f3fc4c"
  },
  {
    "url": "assets/js/69.d1952ae5.js",
    "revision": "ce44caa9ef1f1462784d34cbb0b6b7f3"
  },
  {
    "url": "assets/js/7.d4c418c0.js",
    "revision": "5a7bc395055421a97dea6e6d90fc2b58"
  },
  {
    "url": "assets/js/70.8282d66c.js",
    "revision": "b3904f2eab979549a359d6bbdc0d0924"
  },
  {
    "url": "assets/js/71.3c6d4002.js",
    "revision": "699ce36dfedd6bad84b6c1357606b455"
  },
  {
    "url": "assets/js/72.4ae619b9.js",
    "revision": "c4f133cebdffbaedaed1f007df3ec565"
  },
  {
    "url": "assets/js/73.10c63964.js",
    "revision": "d19c03715938f30b24cda4050ebda1fb"
  },
  {
    "url": "assets/js/74.42b807fd.js",
    "revision": "29b26664a489fdbec6df6fe993fe268d"
  },
  {
    "url": "assets/js/75.47dd12d9.js",
    "revision": "5a20b212a2ef33c8477622ab9167dfa5"
  },
  {
    "url": "assets/js/76.5cede083.js",
    "revision": "9f26ee07e21cb7041d4963246261f309"
  },
  {
    "url": "assets/js/77.3940704b.js",
    "revision": "30e336cbada67713981d50b23f81f22e"
  },
  {
    "url": "assets/js/78.66d15aa3.js",
    "revision": "8f87e9cd359038c9a583a22f7cd149c8"
  },
  {
    "url": "assets/js/79.762c35bb.js",
    "revision": "af1e21f2308e50c838ab87665fca750d"
  },
  {
    "url": "assets/js/8.dca09e1b.js",
    "revision": "5c0683c71db1b024c8925943142985d4"
  },
  {
    "url": "assets/js/80.47850df2.js",
    "revision": "9076adce7abfefdd89beb6e192bdd4be"
  },
  {
    "url": "assets/js/81.2f5ab7f9.js",
    "revision": "63e3a2ee2a092787d2642d9563015c10"
  },
  {
    "url": "assets/js/82.76ad1077.js",
    "revision": "13cd66fd7ba15f1e1a2001472e0b1638"
  },
  {
    "url": "assets/js/83.952bac37.js",
    "revision": "67e20efb68324184f5ba82094e525484"
  },
  {
    "url": "assets/js/84.88445f98.js",
    "revision": "209da73a3afec804968419e230b419f1"
  },
  {
    "url": "assets/js/85.5cd7af7c.js",
    "revision": "7ccad4b4b219db6fae862ac5414a1775"
  },
  {
    "url": "assets/js/9.fcc5d2b2.js",
    "revision": "81165ec639d43ab324f1c4a31547dd68"
  },
  {
    "url": "assets/js/app.5bfa3037.js",
    "revision": "2e48a367c26c3bd30e31aa1f8140d242"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "8a5a5538deef1fbd072cf94d92e28d9c"
  },
  {
    "url": "cs/bash.html",
    "revision": "1342b710482d9d8654eb58c084585b79"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "4fadfe30b051008d59d59faedf865d0c"
  },
  {
    "url": "cs/cheat_sheet.html",
    "revision": "a156f516cbbe1b5004343d1bd1169820"
  },
  {
    "url": "cs/cmake.html",
    "revision": "f66f83aa8f6731c1463248c4172a43c8"
  },
  {
    "url": "cs/computer_composition.html",
    "revision": "ab795e6f4b73ba188c11d42098edf11e"
  },
  {
    "url": "cs/concurrent_programming.html",
    "revision": "062e1c3825510889b5e520ab44215cc9"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "139c068f1955f7b9c9627e83d6c47e79"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "9a8e815b8088d8842e34969e48608f63"
  },
  {
    "url": "cs/git.html",
    "revision": "1eec8c9d49570bcc8b334dce1e536ea5"
  },
  {
    "url": "cs/index.html",
    "revision": "3736c1d2e2655070898f1a6d8e86195a"
  },
  {
    "url": "cs/iptables.html",
    "revision": "6681feb66b41ef0e06ebe05bf7595790"
  },
  {
    "url": "cs/keras.html",
    "revision": "949df3ff18e5c40c71fef49a1c593135"
  },
  {
    "url": "cs/knowledge_map.html",
    "revision": "b76c90bbd8bee52fd6c31d70d2393410"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "b37f44ce5ecf0e5a472eaa9148f726b4"
  },
  {
    "url": "cs/lwip.html",
    "revision": "5e711aa1efb87e46ef0653e4fa693be4"
  },
  {
    "url": "cs/mbedtls.html",
    "revision": "414d6ba7c2d32b061d5719f0fff38b2b"
  },
  {
    "url": "cs/risc-v.html",
    "revision": "00133255e44bc15773dfe2e63f120a4d"
  },
  {
    "url": "cs/scala.html",
    "revision": "9f3eb01bd33024d0570eecebcb6760e1"
  },
  {
    "url": "cs/xtensa.html",
    "revision": "b5fa2be8df12bf0e7243868186e9f39a"
  },
  {
    "url": "ee/about.html",
    "revision": "6a9405707ad03534a1708e4c0573bb2f"
  },
  {
    "url": "ee/chisel.html",
    "revision": "14b0bc420f96c666bc74391df902c107"
  },
  {
    "url": "ee/esp32.html",
    "revision": "33a3d2f7c36e090deace75b49ee247b5"
  },
  {
    "url": "ee/index.html",
    "revision": "7f024b13240b935cdc310e3565abe345"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "1aa1798b63971f718312af1691072e7e"
  },
  {
    "url": "ee/motor_control.html",
    "revision": "eac69b2aaa8b0828b32cf6dfbaf28497"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "3791c42858b28157cd92ecd83230cb87"
  },
  {
    "url": "favicon.png",
    "revision": "3ad5329b46f55d3cd680401f459a28bc"
  },
  {
    "url": "images/cs/ai/logistic_regression.png",
    "revision": "4ef370cc17dbcafcc7091ea024cd56ae"
  },
  {
    "url": "images/cs/ai/sigmoid_function.png",
    "revision": "24758bffbd6a9a5d243ff226cb1e3306"
  },
  {
    "url": "images/cs/cheat_sheet/gdb_cheat_sheet.png",
    "revision": "6f7e54334df820074939f6a5dbb99998"
  },
  {
    "url": "images/cs/computer_composition/2-1_selector.jpeg",
    "revision": "383bfbb085c1eeb9b9473ae6f18e97a0"
  },
  {
    "url": "images/cs/computer_composition/8_bit_adder.jpeg",
    "revision": "68cd38910f526c149d232720b82b6ca1"
  },
  {
    "url": "images/cs/computer_composition/address_space_layout_randomization.jpeg",
    "revision": "dbda1bd1d43d6fa9d7b552ca57d223b9"
  },
  {
    "url": "images/cs/computer_composition/BCD_encoding.jpg",
    "revision": "f5a0b0f2188ebe0d18f4424578a588b3"
  },
  {
    "url": "images/cs/computer_composition/branch_prediction.jpeg",
    "revision": "ea82f279b48c10ad95027c91ed62ab5d"
  },
  {
    "url": "images/cs/computer_composition/cache_coherence.jpeg",
    "revision": "a6146ddd5c78f2cbc1af56b0ee3292da"
  },
  {
    "url": "images/cs/computer_composition/charset_encoding.jpg",
    "revision": "9911c58d79e8a1f106d48a83457d193e"
  },
  {
    "url": "images/cs/computer_composition/cisc_risc.jpeg",
    "revision": "d69a1e753fa1523df054573f13516277"
  },
  {
    "url": "images/cs/computer_composition/CPU_pipeline_overhead.jpeg",
    "revision": "d9e141af3f2c5eedd5aed438388cfe26"
  },
  {
    "url": "images/cs/computer_composition/CPU_pipeline.jpeg",
    "revision": "1e880fa8b1eab511583267e68f0541ad"
  },
  {
    "url": "images/cs/computer_composition/cpu_registers.jpg",
    "revision": "cdba5c17a04f0dd5ef05b70368b9a96f"
  },
  {
    "url": "images/cs/computer_composition/D_flip_flop.jpeg",
    "revision": "d749acce21756d89c35ee19545cfebbb"
  },
  {
    "url": "images/cs/computer_composition/decoder.jpeg",
    "revision": "4002b5f8f60a913e655d5268348ee201"
  },
  {
    "url": "images/cs/computer_composition/direct_mapped_cache.png",
    "revision": "522eade51bbfad19fd25eb4f3ce80f22"
  },
  {
    "url": "images/cs/computer_composition/dynamic_link.jpeg",
    "revision": "8cab516a92fd3d7e951887808597094a"
  },
  {
    "url": "images/cs/computer_composition/elf_format.jpg",
    "revision": "276a740d0eabf5f4be905fe7326d9fb3"
  },
  {
    "url": "images/cs/computer_composition/exception_class.jpeg",
    "revision": "da0117e669ebd2bd06c19beaf12d0da8"
  },
  {
    "url": "images/cs/computer_composition/exception.jpeg",
    "revision": "e8a49f09d1bb50e4d42fccd14d743ad6"
  },
  {
    "url": "images/cs/computer_composition/float_example_result.jpeg",
    "revision": "9ace5a7404d1790b03d07bd1b3cb5a27"
  },
  {
    "url": "images/cs/computer_composition/float_example.jpg",
    "revision": "f9213c43f5fa658a2192a68cd26435ae"
  },
  {
    "url": "images/cs/computer_composition/full_adder.jpg",
    "revision": "3f11f278ba8f24209a56fb3ee1ca9e2a"
  },
  {
    "url": "images/cs/computer_composition/gate_circuit.jpg",
    "revision": "94194480bcfd3b5366e4649ee80de4f6"
  },
  {
    "url": "images/cs/computer_composition/half_adder.jpg",
    "revision": "5860fd8c4ace079b40e66b9568d2b81e"
  },
  {
    "url": "images/cs/computer_composition/hyper_threading.jpeg",
    "revision": "96aa1220ff27776f55091c55c2eddbc8"
  },
  {
    "url": "images/cs/computer_composition/ieee_float32.jpg",
    "revision": "914b71bf1d85fb6ed76e1135f39b6941"
  },
  {
    "url": "images/cs/computer_composition/instruction_cycle.jpeg",
    "revision": "bde3548a4789ba49cab74c8c1ab02a67"
  },
  {
    "url": "images/cs/computer_composition/knowledge_map.jpg",
    "revision": "12bc980053ea355a201e2b529048e2ff"
  },
  {
    "url": "images/cs/computer_composition/linker_process.jpeg",
    "revision": "f62da9b29aa53218f8907851df27f912"
  },
  {
    "url": "images/cs/computer_composition/memory_address_to_cache_line.png",
    "revision": "1313fe1e4eb3b5c949284c8b215af8d4"
  },
  {
    "url": "images/cs/computer_composition/memory_hierarchy.png",
    "revision": "ab345017c3f662b15e15e97e0ca1db0a"
  },
  {
    "url": "images/cs/computer_composition/memory_paging.png",
    "revision": "0cf2f08e1ceda473df71189334857cf0"
  },
  {
    "url": "images/cs/computer_composition/memory_segmentation.png",
    "revision": "57211af3053ed621aeb903433c6c10d1"
  },
  {
    "url": "images/cs/computer_composition/mesi.jpeg",
    "revision": "fa98835c78c879ab69fd1f29193e54d1"
  },
  {
    "url": "images/cs/computer_composition/mips_instruction.jpeg",
    "revision": "b1ade5f8de67b172bf7b4ec9f63589bf"
  },
  {
    "url": "images/cs/computer_composition/multi_level_page_table.jpeg",
    "revision": "614034116a840ef565feda078d73cb76"
  },
  {
    "url": "images/cs/computer_composition/multiply_example.jpeg",
    "revision": "0615e5e4406617ee6584adbb929f9571"
  },
  {
    "url": "images/cs/computer_composition/OoOE.jpeg",
    "revision": "153f8d5e4a4363399133e1d7d9052804"
  },
  {
    "url": "images/cs/computer_composition/operant_forwarding.jpeg",
    "revision": "dceadd35c334974d8270052b37d48c27"
  },
  {
    "url": "images/cs/computer_composition/PC_counter.jpg",
    "revision": "1ed21092022057ed192a7d9aff76144c"
  },
  {
    "url": "images/cs/computer_composition/pipeline_bubble.jpeg",
    "revision": "0d762f2ce532d87cfe69c7b167af9c2a"
  },
  {
    "url": "images/cs/computer_composition/plt_got_table.jpg",
    "revision": "1144d3a2d4f3f4f87c349a93429805c8"
  },
  {
    "url": "images/cs/computer_composition/princeton_harvard.jpeg",
    "revision": "e7508cb409d398380753b292b6df8391"
  },
  {
    "url": "images/cs/computer_composition/RS_flip_flop_with_clock.jpeg",
    "revision": "9e9bc411aa8c7bf2f080f306a0fb8bd8"
  },
  {
    "url": "images/cs/computer_composition/RS_flip_flop.jpeg",
    "revision": "dc6dcce612b2fd51939d7ec44b3fe1de"
  },
  {
    "url": "images/cs/computer_composition/sequent_multiply.jpg",
    "revision": "cb809de19088d08767279715f07482e9"
  },
  {
    "url": "images/cs/computer_composition/simd.jpeg",
    "revision": "48ddcd5ac345091c1be5963d5ef7d7a6"
  },
  {
    "url": "images/cs/computer_composition/simple_page_table.jpeg",
    "revision": "22bb79129f6363ac26be47b35748500f"
  },
  {
    "url": "images/cs/computer_composition/simplest_CPU.jpeg",
    "revision": "6863e10fc635791878d1ecd57618b871"
  },
  {
    "url": "images/cs/computer_composition/sram.png",
    "revision": "25c619a683c161d3678c7339aa34d399"
  },
  {
    "url": "images/cs/computer_composition/ssd_lifecycle.jpeg",
    "revision": "966e51db8354922b533e1db236337e81"
  },
  {
    "url": "images/cs/computer_composition/ssd_slc.jpeg",
    "revision": "0698c240459faa11254932905675dba7"
  },
  {
    "url": "images/cs/computer_composition/ssd_structure.jpeg",
    "revision": "0eee44535a925825b657bcac6afb72d3"
  },
  {
    "url": "images/cs/computer_composition/structure_hazard.jpeg",
    "revision": "c2a4c0340cb835350ea954cdc520704e"
  },
  {
    "url": "images/cs/computer_composition/super_scalar.jpeg",
    "revision": "85f15ec667d09fd2d368822904029b32"
  },
  {
    "url": "images/cs/computer_composition/tlb.jpeg",
    "revision": "432050446f68569a37c7699cccda75d9"
  },
  {
    "url": "images/cs/computer_composition/two_add_instructions.jpeg",
    "revision": "94dda2330b07c08530540ae11838c569"
  },
  {
    "url": "images/cs/computer_composition/Von_Neumann_architecture.jpg",
    "revision": "7698451564f41bad92e81e46e2565cad"
  },
  {
    "url": "images/cs/computer_composition/wear_leveling.jpeg",
    "revision": "6e78f8da0320dc9b392b9d35ecf42091"
  },
  {
    "url": "images/cs/computer_composition/write_back.jpeg",
    "revision": "67053624d6aa2a5c27c295e1fda4890d"
  },
  {
    "url": "images/cs/computer_composition/write_through.jpeg",
    "revision": "8b9ad674953bf36680e815247de235d3"
  },
  {
    "url": "images/cs/cs.svg",
    "revision": "fe696bfe6c74377d4e9be63e9f170afc"
  },
  {
    "url": "images/cs/design_pattern/iterator.png",
    "revision": "a7ae1d2a4c8687e67b1f67a0c7af8e86"
  },
  {
    "url": "images/cs/keras/linear_regression.png",
    "revision": "d67e8d496f872612aa62e02e4a2bcbaa"
  },
  {
    "url": "images/cs/keras/nonlinear_regression.png",
    "revision": "f58b96b1b0e08f26bbf8838ad0957776"
  },
  {
    "url": "images/cs/lwip/arp_protocol.png",
    "revision": "6e6dab0fff2514677894612462c709ce"
  },
  {
    "url": "images/cs/lwip/ethernet_frame.png",
    "revision": "f4de10c483aafa9d08f8920858e828ba"
  },
  {
    "url": "images/cs/lwip/ip_protocol.png",
    "revision": "f8dade3399a1b809f04f3921124d38cf"
  },
  {
    "url": "images/cs/lwip/lwip_api_message.png",
    "revision": "6f55181782841bf71f3f1aa7c953d320"
  },
  {
    "url": "images/cs/lwip/lwip_arp_process_input.png",
    "revision": "35e6fc48d57f6bdd06dcc3e9e7edead8"
  },
  {
    "url": "images/cs/lwip/lwip_arp_process_output.png",
    "revision": "999a53be718cf8bb3857986a359d349b"
  },
  {
    "url": "images/cs/lwip/lwip_arp_reply.png",
    "revision": "59985110fc7d039a3cb5c11c152a145b"
  },
  {
    "url": "images/cs/lwip/lwip_arp_request.png",
    "revision": "7e489783ce9afbf4379c3e2ff47718fe"
  },
  {
    "url": "images/cs/lwip/lwip_heap.png",
    "revision": "1ac8ef3cd1e40f0272465b615331d63c"
  },
  {
    "url": "images/cs/lwip/lwip_icmp_protocol.jpg",
    "revision": "a19c8c2e0dfbf7b390f610bc68d0d5b5"
  },
  {
    "url": "images/cs/lwip/lwip_ip_frag.png",
    "revision": "c71fe3b02e3a1b6896a3a32eed5746bc"
  },
  {
    "url": "images/cs/lwip/lwip_ip_input.png",
    "revision": "2eb1bb3bbef845e62bbd254be337b47d"
  },
  {
    "url": "images/cs/lwip/lwip_ip_output.png",
    "revision": "a56af61ee032ef9fc2aa137c5c38ead4"
  },
  {
    "url": "images/cs/lwip/lwip_memp.png",
    "revision": "1fc0c56889cac9ecfdf57925e31afa22"
  },
  {
    "url": "images/cs/lwip/lwip_packet_message.png",
    "revision": "217126c725e129b967094255902f19ba"
  },
  {
    "url": "images/cs/lwip/lwip_packets_into_core.png",
    "revision": "85a67ff6553a1d80caff17436465fa64"
  },
  {
    "url": "images/cs/lwip/lwip_pbuf_free_0.png",
    "revision": "f263471547a20caf3e0b2ec438161dc0"
  },
  {
    "url": "images/cs/lwip/lwip_pbuf_free_1.png",
    "revision": "33781abf43d12a922ea4eb1bb2f74828"
  },
  {
    "url": "images/cs/lwip/lwip_pbuf_pool.png",
    "revision": "e98010044b87e4e7c0ff77af5605c319"
  },
  {
    "url": "images/cs/lwip/lwip_pbuf_ram.png",
    "revision": "408a7517eeb27554819334a236e3806b"
  },
  {
    "url": "images/cs/lwip/lwip_pbuf_rom_ref.png",
    "revision": "64893f569acab92710ec71b82dabf036"
  },
  {
    "url": "images/cs/lwip/lwip_timeouts_list.png",
    "revision": "51042adb1c6c886cfc3878b0bc89594a"
  },
  {
    "url": "images/cs/lwip/netif_list.png",
    "revision": "73bfcf7938735b596ec4e2538170a853"
  },
  {
    "url": "images/cs/lwip/setup_lwip.png",
    "revision": "c67664dc461af6d603ec1bc2e3f6a661"
  },
  {
    "url": "images/cs/lwip/tcp_ip_stack.png",
    "revision": "13913b2bf1552065429e62743ba0214c"
  },
  {
    "url": "images/cs/risc-v/base_addressing.png",
    "revision": "ce56778ebc9881d1c9db45c44ec6d301"
  },
  {
    "url": "images/cs/risc-v/csr_register_access_instruction.png",
    "revision": "20cc4af258e55224b9d6a0aedef7f112"
  },
  {
    "url": "images/cs/risc-v/csr_register_encoding.png",
    "revision": "43e73e84f64f58165a0a87eceeda90a0"
  },
  {
    "url": "images/cs/risc-v/I_instruction.png",
    "revision": "88b187c94e474d9f4d12bed3e8e9f8b8"
  },
  {
    "url": "images/cs/risc-v/immediate_addressing.png",
    "revision": "63c65b493f3567de925bf6559872fd89"
  },
  {
    "url": "images/cs/risc-v/instruction_encoding.png",
    "revision": "63ecd4313327d872e23e5a02c040249c"
  },
  {
    "url": "images/cs/risc-v/R_instruction.png",
    "revision": "8cf8e62d84306b588b822d35ae419ca9"
  },
  {
    "url": "images/cs/risc-v/register_addressing.png",
    "revision": "0d72c7c824dd7ff34c8c8a9a80f6bd00"
  },
  {
    "url": "images/cs/risc-v/relative_addressing.png",
    "revision": "e48e043961b987d94d50138b35c41972"
  },
  {
    "url": "images/cs/risc-v/riscv_interrupt_enter.png",
    "revision": "192ffaf579fd488994cc125262188551"
  },
  {
    "url": "images/cs/risc-v/riscv_interrupt_exit.png",
    "revision": "1690589888b0ad1b65b2209433c01055"
  },
  {
    "url": "images/cs/risc-v/S_B_instruction.png",
    "revision": "03f4e32b326535978c7ade9c3528f2e1"
  },
  {
    "url": "images/cs/risc-v/U_J_instruction.png",
    "revision": "76d4d585bc00ff2ff7c08a5896f644b6"
  },
  {
    "url": "images/cs/scala/sbt_jvm_options.png",
    "revision": "53a2af9fa1316b81595ea40f95af4685"
  },
  {
    "url": "images/ee/ee.svg",
    "revision": "e0d4275736606674f67f12997b80a8b5"
  },
  {
    "url": "images/ee/esp32/cache_system.png",
    "revision": "0bb68b0bcda593888a0cc797d1735ab5"
  },
  {
    "url": "images/ee/esp32/cpu_core_system.png",
    "revision": "99c3127b152a0c83c8c03f4ac719558a"
  },
  {
    "url": "images/ee/esp32/dma_chain.png",
    "revision": "5fca630de450c01698ac8265b4f53961"
  },
  {
    "url": "images/ee/esp32/dma_engine.png",
    "revision": "54d9bdb70a2295e715bd1c7546115846"
  },
  {
    "url": "images/ee/esp32/esp32_address_table.png",
    "revision": "85ad7d785bd61aa4cb118f0043b0e85b"
  },
  {
    "url": "images/ee/esp32/esp32_external_memory.png",
    "revision": "00b7148f698a82bf10935863900e4886"
  },
  {
    "url": "images/ee/esp32/esp32_on_chip_address_table.png",
    "revision": "24c64bffb60d382f37029329d89f1aeb"
  },
  {
    "url": "images/ee/esp32/esp32_system_clock.png",
    "revision": "212a53578bdae5d21866d16781a2a258"
  },
  {
    "url": "images/ee/esp32/esp32_system_structure.png",
    "revision": "70e29ed6a527c6a0285db28bb7845464"
  },
  {
    "url": "images/ee/esp32/gpio_matrix.png",
    "revision": "0bccff5a741106393e63ab66db51fb45"
  },
  {
    "url": "images/ee/esp32/image_map.png",
    "revision": "017b48c6656dddd64aed21cad3813ae0"
  },
  {
    "url": "images/ee/esp32/input_signal_to_peripheral.png",
    "revision": "a9b187b89174d16d18a803e0112e2183"
  },
  {
    "url": "images/ee/esp32/interrupt_matrix.png",
    "revision": "dc37bcbdf70db978592e05f56ee47fe8"
  },
  {
    "url": "images/ee/esp32/io_mux_pad.png",
    "revision": "671514cc44c8b5a394fa3e3a0cced2a8"
  },
  {
    "url": "images/ee/esp32/memory_and_bus.png",
    "revision": "32a8b406d22236061fcb758336ba55b4"
  },
  {
    "url": "images/ee/esp32/memory_map.svg",
    "revision": "6e8f854157f68ded4cbfa11f64108ae0"
  },
  {
    "url": "images/ee/esp32/output_signal_to_pad.png",
    "revision": "06e891bab7649f99f5a1c070de7885c6"
  },
  {
    "url": "images/ee/esp32/peripheral_clock.png",
    "revision": "329fd3095367667745b5e01c9102bb71"
  },
  {
    "url": "images/ee/esp32/spi_signals.png",
    "revision": "2ac4167088ad40da2f88c372545f26b9"
  },
  {
    "url": "images/ee/esp32/strapping_pin.png",
    "revision": "5c9a4fda6540177c3f7f80d6862a22cc"
  },
  {
    "url": "images/ee/infrared_remote/infrared_modulation_demodulation.svg",
    "revision": "f86ad3e629424c9af8a216abb58ec189"
  },
  {
    "url": "images/ee/infrared_remote/nec_ext_train.png",
    "revision": "2f78d1ce7f001926f6b90ad966796e91"
  },
  {
    "url": "images/ee/infrared_remote/nec_modulation.png",
    "revision": "da33571c6f0afb94b1ec1d91caba3edb"
  },
  {
    "url": "images/ee/infrared_remote/nec_repeat.png",
    "revision": "63364daf21e5522c64eb8dfa82f2cef2"
  },
  {
    "url": "images/ee/infrared_remote/nec_sequence.png",
    "revision": "afea92a3b5cc1aa2457d2b118b157c84"
  },
  {
    "url": "images/ee/infrared_remote/nec_train.png",
    "revision": "f970404e7bbfb5711fea5c776f689f3a"
  },
  {
    "url": "images/ee/motor/brash_motor.png",
    "revision": "78e5d626f0a9e18a5fd2434b712edb98"
  },
  {
    "url": "images/ee/motor/brashless_motor.png",
    "revision": "850d54bc1f29f5bb3db7ee53d23803bd"
  },
  {
    "url": "images/ee/motor/motor_category.png",
    "revision": "cd3b7f87a795775889c64b6404eb3f54"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "7f3f777d138f012a2265d77b10d952f8"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "04dcbd879d05aca11b08e8ccac38a8b0"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "408ea52ae94a10257aec25a4e0d1aa36"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "78eb4441988533905ba97b4f6f379a76"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "3293a2ba7357e53a03a13a85cfc24cd8"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "a5ae50cb2baa927cbc564db72d233038"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "bbfaa6a7ce0ab3899cd13fae0516dabc"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "0fa51e6798434754e980306de7b8c083"
  },
  {
    "url": "images/others/others.svg",
    "revision": "28a34ae59424a4becd8ace3f14b0b58c"
  },
  {
    "url": "images/resume/ai.svg",
    "revision": "f1dafe8922f7dca830e4ea40abe5a814"
  },
  {
    "url": "images/resume/blog.svg",
    "revision": "2132b282a62fdc63ec6084f47feeadca"
  },
  {
    "url": "images/resume/briefcase.svg",
    "revision": "e5b8dfd88d257ef59607ff503b46a890"
  },
  {
    "url": "images/resume/certificate.svg",
    "revision": "e855e283466a7596679860477005b95a"
  },
  {
    "url": "images/resume/electronic.svg",
    "revision": "bbc07af00a040961f7610db77ec955f8"
  },
  {
    "url": "images/resume/envelope.svg",
    "revision": "ce757b0ad4826316f62e2349dc69157d"
  },
  {
    "url": "images/resume/geek.svg",
    "revision": "46552f138017b1941df626e468d77937"
  },
  {
    "url": "images/resume/github.svg",
    "revision": "3fcc2347207e5f9c79a335745ad05d55"
  },
  {
    "url": "images/resume/graduation-cap.svg",
    "revision": "d011739b9d43665bd81607dfeb7290b2"
  },
  {
    "url": "images/resume/hobby.svg",
    "revision": "1958411e2d6842c6ed08302a14c944a1"
  },
  {
    "url": "images/resume/info.svg",
    "revision": "63bd9d622744545ad8854e469e32e497"
  },
  {
    "url": "images/resume/language.svg",
    "revision": "81bb4f03b3167297e7dfa9efc25e242b"
  },
  {
    "url": "images/resume/network.svg",
    "revision": "3769543541ba02f40a922818ea7f9425"
  },
  {
    "url": "images/resume/phone.svg",
    "revision": "5964fd19559cc192308ec5bbc7e24b5b"
  },
  {
    "url": "images/resume/programming.svg",
    "revision": "6ba074a9f3d4d8dad64511a293c7dccf"
  },
  {
    "url": "images/resume/project-diagram.svg",
    "revision": "2c022c0cc22ccdea32ea67668608877b"
  },
  {
    "url": "images/resume/tools.svg",
    "revision": "879de372ee37b73974b6cdb1847c29d8"
  },
  {
    "url": "images/resume/writing.svg",
    "revision": "bbf32bc943b50af3e456a375567a7f03"
  },
  {
    "url": "index.html",
    "revision": "e46dfa919219946deb19e5578e095cfd"
  },
  {
    "url": "others/about.html",
    "revision": "3ede95d22622552e01049c066274934b"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "b1cb6fc267d015376cd59e57c857e7a7"
  },
  {
    "url": "others/android-studio.html",
    "revision": "c1e861da039681987c94e49d97c46dfb"
  },
  {
    "url": "others/android.html",
    "revision": "4d57a097b41e476f1788e33f40037568"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "4ed3f3d43db7bceb645e3c9172ab6b34"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "20b83dc010de4ea77577781135cc820b"
  },
  {
    "url": "others/css.html",
    "revision": "b080b5659fc39858c00d40a3c353fbf9"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "c89735885d2e2f538321fd09d2770c81"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "096d34b26b4db2ce8817b89653c13f4b"
  },
  {
    "url": "others/english-writting.html",
    "revision": "3116242d382b4cadb82c3175883d0a5d"
  },
  {
    "url": "others/freertos.html",
    "revision": "3160aa2546c33305e263f7bf9e5ab1cb"
  },
  {
    "url": "others/gns3.html",
    "revision": "915a506d9479c3b2be3bbe55919d3cc7"
  },
  {
    "url": "others/gps.html",
    "revision": "ac1c44289f741abb825047cb199db088"
  },
  {
    "url": "others/html5.html",
    "revision": "cc89e7c8e0678ef776a4b41e314dd032"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "ea5af389c83e3fa9a3fb12e15606bc56"
  },
  {
    "url": "others/index.html",
    "revision": "c9a58de79a7d920f8d1fc81bf7802957"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "a104cb6f2647639e02f10754e9a1a550"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "ed8c4e66fe8d23c64af48a29c381a8c9"
  },
  {
    "url": "others/javascript.html",
    "revision": "ba6a7c5e0718d9e0a436e5d4ec87cb27"
  },
  {
    "url": "others/json.html",
    "revision": "5b156e76ac7b64c8fbd2fbcdf40a2c68"
  },
  {
    "url": "others/latex.html",
    "revision": "88f9fbeff5e069fc9874cbaaa87bd45b"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "4e021f79ca173dca2b112f134d42defa"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "9ea8184e86848f3f68e9737dff71373b"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "5a2b66cdddd91b62b30a280fa02729b3"
  },
  {
    "url": "others/markdown.html",
    "revision": "88b5c83af01a29fa856834598c98ee57"
  },
  {
    "url": "others/matlab.html",
    "revision": "31e825d6386b30bcd99cbd5ce6f5c745"
  },
  {
    "url": "others/mdp-template.html",
    "revision": "05cd1c65a9f8df4e49c5d40261115480"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "3425787e3cffb30f9c5e5e4d47a49118"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "00ea71619191c1954991a8b7220ec318"
  },
  {
    "url": "others/network-security.html",
    "revision": "d86578064d3274b6bc1b8b9556967685"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "f9124cf87d71a21c1426e7fdd7c4aa00"
  },
  {
    "url": "others/oral_english.html",
    "revision": "3a9b5d7fd9db4e3999759911bb8bfdd0"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "d14853272e0833cf17b638a9e2ef7806"
  },
  {
    "url": "others/poe.html",
    "revision": "a1eee1f27d06b6e365853ad38f894831"
  },
  {
    "url": "others/pyside2.html",
    "revision": "8a96bd20eef4d46f11535b354c149e1b"
  },
  {
    "url": "others/python-socket.html",
    "revision": "bb6b54b85a8bb3ffb55c18cc5f75b241"
  },
  {
    "url": "others/python.html",
    "revision": "682bb41d1dd549116865856818117009"
  },
  {
    "url": "others/q-learning.html",
    "revision": "c477dd9179dee3fb7e67e054e9116c58"
  },
  {
    "url": "others/qr-code.html",
    "revision": "f905d0d6b7b68259f31bfcc6e2a7006c"
  },
  {
    "url": "others/qt4.html",
    "revision": "021067b20a07db8eb7b51ed6fd0e0be8"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "ffd0c4684c82db6f74e8c5fd4f4a153f"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "b6966f6f6561191b3d4f45af9270bb2d"
  },
  {
    "url": "others/sd-card.html",
    "revision": "d298c0ad4bddead55676aae088f63689"
  },
  {
    "url": "others/sdn.html",
    "revision": "d22ef784b3dae9f0c39e8203bfa938ad"
  },
  {
    "url": "others/star-uml.html",
    "revision": "38a3ef7be22911e2b0126f63d86ef99e"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "9eab41c24ed3af09a39fa57c605c54a7"
  },
  {
    "url": "others/verilog.html",
    "revision": "3a0a7dc38fbe58cf7ae746764907d0f6"
  },
  {
    "url": "others/vue.html",
    "revision": "e183f36f963a84bf18edd47509eaf0a8"
  },
  {
    "url": "others/w5500.html",
    "revision": "8f4ffc4bec203738d6be18762d7b7975"
  },
  {
    "url": "others/w7500.html",
    "revision": "43548ba7a1b30f17f5f44d9ae5b89e69"
  },
  {
    "url": "resume.html",
    "revision": "e92beaf9a71a83a1615a62e327b7102c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
