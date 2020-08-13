#include <stdio.h>
#include <stdint.h>
#include <stdbool.h>

int32_t hash_l(const char *name, size_t length) {
    int32_t h = 0;
    for (size_t i = 0; i < length; i++) {
        h = 31 * h + name[i];
    }
    return h;
}

static inline bool is_alphabet(char c) {
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
}

static inline bool is_digit(char c) {
    return (c >= '0' && c <= '9');
}

static inline bool is_sep(char c) {
    return (c == '_');
}

int main(int argc, char **argv) {
    if (argc != 4) {
        printf("bad usage!\n");
        printf(" expecting: program path/to/keys.txt path/to/output_keys.ts path/to/output_metakeys.ts\n");
        return 0;
    }
    char *input = argv[1];
    char *keys_filepath = argv[2];
    char *metakeys_filepath = argv[3];

    FILE *fin;
    FILE *keys_file;
    FILE *metakeys_files;

    int line_max = 1024;
    char buffer[line_max];
    char *max = &buffer[line_max - 1];
    fin = fopen(input, "r");

    // init keys (int)
    keys_file = fopen(keys_filepath, "w");
    fprintf(keys_file, "// GENERATED, DO NOT MODIFY\n"
                "enum Keys {\n");

    // init meta-keys (string)
    metakeys_files = fopen(metakeys_filepath, "w");
    fprintf(metakeys_files, "// GENERATED, DO NOT MODIFY\n"
                "enum MetaKeys {\n");

    while (fgets(buffer, line_max, fin)) {
        char *start = &buffer[0];
        while (!(is_alphabet(*start) || is_digit(*start) || is_sep(*start)) && start != max) {
            start++;
        }
        char *end = start;
        while (is_alphabet(*end) || is_digit(*end) || is_sep(*end)) {
            end++;
        }
        int len = ((int) (end - start));
        fprintf(keys_file, "  g_%.*s = %d,\n", len, start, hash_l(start, len));
        fprintf(metakeys_files, "  g_%.*s = '%.*s',\n", len, start, len, start);
    }
    
    fprintf(keys_file, "}\n");
    fprintf(keys_file, "export default Keys;\n");

    fprintf(metakeys_files, "}\n");
    fprintf(metakeys_files, "export default MetaKeys;\n");

    // flush
    fflush(fin);
    fflush(keys_file);
    fflush(metakeys_files);

    // close
    fclose(fin);
    fclose(keys_file);
    fclose(metakeys_files);
    return 0;
}
