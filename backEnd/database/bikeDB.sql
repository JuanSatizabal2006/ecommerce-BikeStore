PGDMP         9                |            bikeDB    15.5    15.5 3    1           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            2           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            3           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            4           1262    16610    bikeDB    DATABASE     ~   CREATE DATABASE "bikeDB" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Colombia.1252';
    DROP DATABASE "bikeDB";
                postgres    false            �            1259    16612    admin    TABLE     y   CREATE TABLE public.admin (
    id_admin integer NOT NULL,
    nombre text,
    correo text,
    id_det_venta integer
);
    DROP TABLE public.admin;
       public         heap    postgres    false            �            1259    16611    admin_id_admin_seq    SEQUENCE     �   CREATE SEQUENCE public.admin_id_admin_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.admin_id_admin_seq;
       public          postgres    false    215            5           0    0    admin_id_admin_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.admin_id_admin_seq OWNED BY public.admin.id_admin;
          public          postgres    false    214            �            1259    16639    articulo    TABLE     �   CREATE TABLE public.articulo (
    id_articulo integer NOT NULL,
    nombre text,
    costo numeric(11,2),
    margen numeric(3,2),
    descuento numeric(3,2),
    id_categoria integer
);
    DROP TABLE public.articulo;
       public         heap    postgres    false            �            1259    16638    articulos_id_articulo_seq    SEQUENCE     �   CREATE SEQUENCE public.articulos_id_articulo_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.articulos_id_articulo_seq;
       public          postgres    false    221            6           0    0    articulos_id_articulo_seq    SEQUENCE OWNED BY     V   ALTER SEQUENCE public.articulos_id_articulo_seq OWNED BY public.articulo.id_articulo;
          public          postgres    false    220            �            1259    16630 	   categoria    TABLE     [   CREATE TABLE public.categoria (
    id_categoria integer NOT NULL,
    descripcion text
);
    DROP TABLE public.categoria;
       public         heap    postgres    false            �            1259    16629    categoria_id_categoria_seq    SEQUENCE     �   CREATE SEQUENCE public.categoria_id_categoria_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.categoria_id_categoria_seq;
       public          postgres    false    219            7           0    0    categoria_id_categoria_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.categoria_id_categoria_seq OWNED BY public.categoria.id_categoria;
          public          postgres    false    218            �            1259    16621    cliente    TABLE     w   CREATE TABLE public.cliente (
    id_cliente integer NOT NULL,
    nombre text,
    direccion text,
    correo text
);
    DROP TABLE public.cliente;
       public         heap    postgres    false            �            1259    16620    cliente_id_cliente_seq    SEQUENCE     �   CREATE SEQUENCE public.cliente_id_cliente_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.cliente_id_cliente_seq;
       public          postgres    false    217            8           0    0    cliente_id_cliente_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.cliente_id_cliente_seq OWNED BY public.cliente.id_cliente;
          public          postgres    false    216            �            1259    16655 	   det_venta    TABLE     �   CREATE TABLE public.det_venta (
    id_det_venta integer NOT NULL,
    cantidad integer,
    precio_unitario numeric(11,2),
    id_venta integer,
    id_articulo integer
);
    DROP TABLE public.det_venta;
       public         heap    postgres    false            �            1259    16654    det_venta_id_det_venta_seq    SEQUENCE     �   CREATE SEQUENCE public.det_venta_id_det_venta_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.det_venta_id_det_venta_seq;
       public          postgres    false    225            9           0    0    det_venta_id_det_venta_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.det_venta_id_det_venta_seq OWNED BY public.det_venta.id_det_venta;
          public          postgres    false    224            �            1259    16648    venta    TABLE     �   CREATE TABLE public.venta (
    id_venta integer NOT NULL,
    fecha date,
    vr_total numeric(15,2),
    id_cliente integer
);
    DROP TABLE public.venta;
       public         heap    postgres    false            �            1259    16647    venta_id_venta_seq    SEQUENCE     �   CREATE SEQUENCE public.venta_id_venta_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.venta_id_venta_seq;
       public          postgres    false    223            :           0    0    venta_id_venta_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.venta_id_venta_seq OWNED BY public.venta.id_venta;
          public          postgres    false    222            ~           2604    16615    admin id_admin    DEFAULT     p   ALTER TABLE ONLY public.admin ALTER COLUMN id_admin SET DEFAULT nextval('public.admin_id_admin_seq'::regclass);
 =   ALTER TABLE public.admin ALTER COLUMN id_admin DROP DEFAULT;
       public          postgres    false    214    215    215            �           2604    16642    articulo id_articulo    DEFAULT     }   ALTER TABLE ONLY public.articulo ALTER COLUMN id_articulo SET DEFAULT nextval('public.articulos_id_articulo_seq'::regclass);
 C   ALTER TABLE public.articulo ALTER COLUMN id_articulo DROP DEFAULT;
       public          postgres    false    220    221    221            �           2604    16633    categoria id_categoria    DEFAULT     �   ALTER TABLE ONLY public.categoria ALTER COLUMN id_categoria SET DEFAULT nextval('public.categoria_id_categoria_seq'::regclass);
 E   ALTER TABLE public.categoria ALTER COLUMN id_categoria DROP DEFAULT;
       public          postgres    false    218    219    219                       2604    16624    cliente id_cliente    DEFAULT     x   ALTER TABLE ONLY public.cliente ALTER COLUMN id_cliente SET DEFAULT nextval('public.cliente_id_cliente_seq'::regclass);
 A   ALTER TABLE public.cliente ALTER COLUMN id_cliente DROP DEFAULT;
       public          postgres    false    217    216    217            �           2604    16658    det_venta id_det_venta    DEFAULT     �   ALTER TABLE ONLY public.det_venta ALTER COLUMN id_det_venta SET DEFAULT nextval('public.det_venta_id_det_venta_seq'::regclass);
 E   ALTER TABLE public.det_venta ALTER COLUMN id_det_venta DROP DEFAULT;
       public          postgres    false    225    224    225            �           2604    16651    venta id_venta    DEFAULT     p   ALTER TABLE ONLY public.venta ALTER COLUMN id_venta SET DEFAULT nextval('public.venta_id_venta_seq'::regclass);
 =   ALTER TABLE public.venta ALTER COLUMN id_venta DROP DEFAULT;
       public          postgres    false    222    223    223            $          0    16612    admin 
   TABLE DATA           G   COPY public.admin (id_admin, nombre, correo, id_det_venta) FROM stdin;
    public          postgres    false    215   �9       *          0    16639    articulo 
   TABLE DATA           _   COPY public.articulo (id_articulo, nombre, costo, margen, descuento, id_categoria) FROM stdin;
    public          postgres    false    221   �9       (          0    16630 	   categoria 
   TABLE DATA           >   COPY public.categoria (id_categoria, descripcion) FROM stdin;
    public          postgres    false    219   V:       &          0    16621    cliente 
   TABLE DATA           H   COPY public.cliente (id_cliente, nombre, direccion, correo) FROM stdin;
    public          postgres    false    217   �:       .          0    16655 	   det_venta 
   TABLE DATA           c   COPY public.det_venta (id_det_venta, cantidad, precio_unitario, id_venta, id_articulo) FROM stdin;
    public          postgres    false    225   �:       ,          0    16648    venta 
   TABLE DATA           F   COPY public.venta (id_venta, fecha, vr_total, id_cliente) FROM stdin;
    public          postgres    false    223   �:       ;           0    0    admin_id_admin_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.admin_id_admin_seq', 1, false);
          public          postgres    false    214            <           0    0    articulos_id_articulo_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.articulos_id_articulo_seq', 5, true);
          public          postgres    false    220            =           0    0    categoria_id_categoria_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.categoria_id_categoria_seq', 2, true);
          public          postgres    false    218            >           0    0    cliente_id_cliente_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.cliente_id_cliente_seq', 1, false);
          public          postgres    false    216            ?           0    0    det_venta_id_det_venta_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.det_venta_id_det_venta_seq', 1, false);
          public          postgres    false    224            @           0    0    venta_id_venta_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.venta_id_venta_seq', 1, false);
          public          postgres    false    222            �           2606    16619    admin admin_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.admin
    ADD CONSTRAINT admin_pkey PRIMARY KEY (id_admin);
 :   ALTER TABLE ONLY public.admin DROP CONSTRAINT admin_pkey;
       public            postgres    false    215            �           2606    16646    articulo articulos_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.articulo
    ADD CONSTRAINT articulos_pkey PRIMARY KEY (id_articulo);
 A   ALTER TABLE ONLY public.articulo DROP CONSTRAINT articulos_pkey;
       public            postgres    false    221            �           2606    16637    categoria categoria_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.categoria
    ADD CONSTRAINT categoria_pkey PRIMARY KEY (id_categoria);
 B   ALTER TABLE ONLY public.categoria DROP CONSTRAINT categoria_pkey;
       public            postgres    false    219            �           2606    16628    cliente cliente_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT cliente_pkey PRIMARY KEY (id_cliente);
 >   ALTER TABLE ONLY public.cliente DROP CONSTRAINT cliente_pkey;
       public            postgres    false    217            �           2606    16660    det_venta det_venta_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.det_venta
    ADD CONSTRAINT det_venta_pkey PRIMARY KEY (id_det_venta);
 B   ALTER TABLE ONLY public.det_venta DROP CONSTRAINT det_venta_pkey;
       public            postgres    false    225            �           2606    16653    venta venta_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.venta
    ADD CONSTRAINT venta_pkey PRIMARY KEY (id_venta);
 :   ALTER TABLE ONLY public.venta DROP CONSTRAINT venta_pkey;
       public            postgres    false    223            �           2606    16681    admin admin_id_det_venta_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.admin
    ADD CONSTRAINT admin_id_det_venta_fkey FOREIGN KEY (id_det_venta) REFERENCES public.det_venta(id_det_venta) NOT VALID;
 G   ALTER TABLE ONLY public.admin DROP CONSTRAINT admin_id_det_venta_fkey;
       public          postgres    false    225    3215    215            �           2606    16666 #   articulo articulo_id_categoria_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.articulo
    ADD CONSTRAINT articulo_id_categoria_fkey FOREIGN KEY (id_categoria) REFERENCES public.categoria(id_categoria) NOT VALID;
 M   ALTER TABLE ONLY public.articulo DROP CONSTRAINT articulo_id_categoria_fkey;
       public          postgres    false    221    3209    219            �           2606    16676 $   det_venta det_venta_id_articulo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.det_venta
    ADD CONSTRAINT det_venta_id_articulo_fkey FOREIGN KEY (id_articulo) REFERENCES public.articulo(id_articulo) NOT VALID;
 N   ALTER TABLE ONLY public.det_venta DROP CONSTRAINT det_venta_id_articulo_fkey;
       public          postgres    false    225    221    3211            �           2606    16671 !   det_venta det_venta_id_venta_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.det_venta
    ADD CONSTRAINT det_venta_id_venta_fkey FOREIGN KEY (id_venta) REFERENCES public.venta(id_venta) NOT VALID;
 K   ALTER TABLE ONLY public.det_venta DROP CONSTRAINT det_venta_id_venta_fkey;
       public          postgres    false    223    3213    225            �           2606    16661    venta venta_id_cliente_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.venta
    ADD CONSTRAINT venta_id_cliente_fkey FOREIGN KEY (id_cliente) REFERENCES public.cliente(id_cliente) NOT VALID;
 E   ALTER TABLE ONLY public.venta DROP CONSTRAINT venta_id_cliente_fkey;
       public          postgres    false    217    223    3207            $      x������ � �      *   r   x�M�;�0�z�0�~<(����D�%��8?6��f���c�\��e�`��T��{���q�kmH���u�e�����{�1>�0�bC��lH���>˙�m;zd���$"/� 6      (   5   x�3�t-.IT(K��KTH-V��W�M��/R(,MU�H��2�TP��$���� 1S=      &      x������ � �      .      x������ � �      ,      x������ � �     